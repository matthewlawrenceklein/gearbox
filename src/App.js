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
import GigCard from './components/GigCard'
import NewCollection from './components/NewCollection'



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
    <div className='component-container'>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  )
}

function SignOut() {
  return auth.currentUser && (
    <div className='component-container'>
      <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  )
}

function GetGigs(){
    const [user] = useAuthState(auth);
    const userGigs = []

    firestore.collection("gigs").where('user', '==', user.email)
    .get()
    .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            userGigs.push(doc.data())
        });
        // console.log(userGigs)
        return userGigs.map(gig => {
          console.log(gig)
        })
    })
  return(
    <h1>hi</h1>
  )
}

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="container">
      <Switch>
        <Route exact path='/'>
          <section>
            {user ? 
            <div>
              <SignOut />
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

export default withRouter(App);
