import React from 'react';
import './App.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';
import Dash from './components/Dash'
import { Route, Switch, withRouter } from "react-router-dom";
import NewGigForm1 from './components/NewGigForm1'
import NewGigForm2 from './components/NewGigForm2'
import NewCollection from './components/NewCollection'
import { connect } from "react-redux";
import { setUser } from './actions/index'
import { setGigs } from './actions/index'
import { setCollections } from './actions/index'

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_KEY}`,
  authDomain: "gearbox-c0d18.firebaseapp.com",
  databaseURL: "https://gearbox-c0d18.firebaseio.com",
  projectId: "gearbox-c0d18",
  storageBucket: "gearbox-c0d18.appspot.com",
  messagingSenderId: "630866494310",
  appId: "1:630866494310:web:f4ad2d58703f2d36bd7ea7"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const auth = firebase.auth();

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div className='login-master'>
      <div className='login-container'>
        <section className='login-items'>
          <h2>Gearbox - Your Music Gear Checklist</h2>
          <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
        </section>
    </div>

    </div>
  )
}

function Header() {
  return auth.currentUser && (
    <div className='header'>
      <h3>gearbox</h3>
      <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  )
}

const App = (props) => {

  const [user] = useAuthState(auth);
  props.setUser(user)
  function GetGigs(){
    const [user] = useAuthState(auth);
    const userGigs = []
    const userCollections = []

    firestore.collection("gigs").where('combinedGigObj.user', '==', user.email)
    .get()
    .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            userGigs.push(doc.data())
        });
        props.setGigs(userGigs)  
    })
    firestore.collection("collections").where('combinedCollection.user', '==', user.email)
    .get()
    .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            userCollections.push(doc.data())
        });
        props.setCollections(userCollections)  
    })

  return(
    <h1>  </h1>
  )
}

  return (
    <div className="master-container">
      <Switch>
        <Route exact path='/'>
          <section>
            {user ? 
            <div>
              <Header />
              <Dash /> 
              <GetGigs />
            </div>
            : 
            <SignIn />}
          </section>
        </Route>
        <Route path='/newgigform1' component={NewGigForm1}/>
        <Route path='/newgigform2' component={NewGigForm2}/>
        <Route path='/newcollection' component={NewCollection}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = {
  setUser,
  setGigs,
  setCollections
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
