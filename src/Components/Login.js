import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login ()
{
  const navigate = useNavigate();
  const { register, trigger, handleSubmit, formState: { errors }, reset } = useForm();

  const [ user, setUser ] = useState( {} );
  const onInputChange = ( e ) =>
  {
    setUser( { ...user, [ e.target.name ]: e.target.value } );
  };




  function onSubmit ( data )
  {
    axios.post( `https://reqres.in/api/login`, data ).then(
      ( res ) =>
      {
        console.log( res );
      }
    ).catch( ( err ) =>
    {
      console.log( err );
      alert( err.response.data.error );
      return navigate( '/register' );

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
                <label className="form-label">User Name</label>
                <input
                  name='username'
                  type="text"
                  className="form-control"
                  onChange={e => onInputChange( e )} {...register( "username", {
                    required: "User Name is required",
                  } )} onKeyUp={() =>
                  {
                    trigger( "username" );
                  }} />
                {errors.username &&
                  ( <small className='text-danger'>{errors.username.message} </small> )}
              </div>
              <div className='col-3  mb-4'>
                <label className="form-label">Email</label>
                <input
                  name='email'
                  type="email"
                  className="form-control"
                  onChange={e => onInputChange( e )}
                  {...register( "email", {
                    required: "Email is required",
                  } )} onKeyUp={() =>
                  {
                    trigger( "email" );
                  }} />
                {errors.email &&
                  ( <small className='text-danger'>{errors.email.message} </small> )}
              </div>
              <div className='col-3  mb-4'>
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
              </div>
              <button className='btn btn-primary'>Register</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;;