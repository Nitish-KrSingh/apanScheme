import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar'; 
import Home from './components/Home/Home';
import About from './components/About';
import Ministries from './components/Ministries';
import Login from './components/Login';
import Signup from './components/Signup';
import Schemes from './components/Schemes/Schemes';
import FilterForm from './components/FilterForm';

import Footer from './components/Footer/Footer';
import UserProfile from './components/UserProfile/UserProfile';
import HorizontalLoader from './components/ui/HorizontalLoader/HorizontalLoader';
import { AuthContext } from './context/auth-context';
function App() {
    const authContext = useContext(AuthContext);
  return (
    <>
     
     {authContext.isLoading && <HorizontalLoader/>  } 
      <Navbar />
      <Routes>
        
        <Route element={<Home />} exact path='/' />

        <Route element={<Schemes />} exact path='/schemes' />

        <Route element={<Ministries />} exact path='/ministries' />

        <Route element={<About />} exact path='/about' />

        <Route element={<Login />} exact path='/login' />

         <Route element={<Signup />} exact path='/signup' /> 

        <Route element={<UserProfile/> } exact path = '/profile' />
        <Route element={<FilterForm /> } exact path = '/filterform' />

        <Route element={<Footer/> } exact path = '/Footer' />


      </Routes>
    </>
  );
}

export default App;
