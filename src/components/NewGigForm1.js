import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { newGigFirstData } from '../actions/index'



const NewGigForm1 = (props) => {
  const { register, handleSubmit,  errors } = useForm();

  const onSubmit = data => {
    props.newGigFirstData(data)
    props.history.push("./newgigform2");
  }

  return (
    <div className='login-master'>
      <div className='form-container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type='date'name="date" ref={register({ required: true })} className='form-item'/>
          <input type='time'name="time" ref={register({ required: true })} className='form-item'/>
          <input name="location" placeholder="Venue/Location" ref={register({required: true })} className='form-item'/>
          <input name="description" placeholder="Gig Description" ref={register} className='form-item'/>
          {errors.exampleRequired && <span>This field is required</span>}      
          <input type="submit" value='Add Gear Details' className='form-submit-button'/>
        </form>
      </div>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      
  }
}

const mapDispatchToProps = {
  newGigFirstData
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewGigForm1))