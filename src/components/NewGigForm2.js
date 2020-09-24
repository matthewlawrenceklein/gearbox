import React from 'react';
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { addGig } from '../actions/index'



const NewGigForm2 = (props) => {

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
    props.history.push("/");
  }

    return (
        <div className='component-container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <button> add gear </button>
                <button> add another collection </button>

                <select name='add a collection'>
                    <option> user collection1</option>
                    <option> pedalboard stuff</option>
                    <option> dog things </option>
                </select>

            
                <input type="submit" />
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        
    }
  }
  
const mapDispatchToProps = {
    addGig
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewGigForm2))