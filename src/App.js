import './App.css';
import React from 'react';
import User from './Components/user';
import AddUser from './Components/createUser';
// import Register from './Components/Register';
// import Login from './Components/Login';
// import { Routes, Route } from 'react-router-dom';

function App ()
{
  return (
    <div className="App">
      <User />
      <AddUser />
      {/* <Routes> */}
      {/* <Route path='/' element={<Login />} /> */}
      {/* <Route path='register' element={<Register />} /> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
