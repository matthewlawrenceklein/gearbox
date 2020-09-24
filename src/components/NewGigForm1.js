import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";



const NewGigForm1 = (props) => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
    props.history.push("./newgigform2");
  }

  return (
    <div className='component-container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='date'name="date" ref={register({ required: true })} />
        <input type='time'name="time" ref={register({ required: true })} />
        <input name="description" placeholder="Gig Description" ref={register({required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}      
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
  
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewGigForm1))