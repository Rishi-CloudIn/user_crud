import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

function AddUser ()
{
  const { register, trigger, handleSubmit, formState: { errors }, reset } = useForm();

  const [ user, setUser ] = useState( {} );
  const onInputChange = ( e ) =>
  {
    setUser( { ...user, [ e.target.name ]: e.target.value } );
  };




  function onSubmit ( data )
  {
    axios.post( `https://reqres.in/api/users`, data ).then(
      ( res ) =>
      {
        console.log( res );
      }
    ).catch( ( err ) =>
    {
      console.log( err );
      alert( err.response.data.error );

    } );
    console.log( data );
    reset();
  }
  return (
    <>
      <div className='row'>
        <div className='col-12 mt-5'>
          <h1 className='h3 text-center'>Login</h1>
          <form onSubmit={handleSubmit( onSubmit )}>

            <div className='d-flex justify-content-center flex-column align-items-center mt-4'>
              <div className='col-3 mb-4'>
                <label className="form-label">Name</label>
                <input
                  name='name'
                  type="text"
                  className="form-control"
                  onChange={e => onInputChange( e )} {...register( "name", {
                    required: "Name is required",
                  } )} onKeyUp={() =>
                  {
                    trigger( "name" );
                  }} />
                {errors.name &&
                  ( <small className='text-danger'>{errors.name.message} </small> )}
              </div>
              <div className='col-3  mb-4'>
                <label className="form-label">Job</label>
                <input
                  name='job'
                  type="text"
                  className="form-control"
                  onChange={e => onInputChange( e )}
                  {...register( "job", {
                    required: "job is required",
                  } )} onKeyUp={() =>
                  {
                    trigger( "job" );
                  }} />
                {errors.job &&
                  ( <small className='text-danger'>{errors.job.message} </small> )}
              </div>
              {/* <div className='col-3  mb-4'>
                <label className="form-label">Password</label>
                <input
                  name='password'
                  type="text"
                  className="form-control"
                  onChange={e => onInputChange( e )}
                  {...register( "password", {
                    required: "Password is required",
                  } )} onKeyUp={() =>
                  {
                    trigger( "password" );
                  }} />
                {errors.password &&
                  ( <small className='text-danger'>{errors.password.message} </small> )}
              </div> */}
              <button type='submit' className='btn btn-primary'>Register</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddUser;