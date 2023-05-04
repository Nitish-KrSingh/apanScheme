import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar'; 
import Home from './components/Home/Home';
import About from './components/About';

import Login from './components/Login';
import Signup from './components/Signup';
import Schemes from './components/Schemes/Schemes';
import FilterForm from './components/FilterForm';
import HowItWorks from './components/Home/HowItWorks';
import Footer from './components/Footer/Footer';
import SchemesDetails from './components/SchemesDetails/SchemesDetails';
import UserProfile from './components/UserProfile/UserProfile';
import HorizontalLoader from './components/ui/HorizontalLoader/HorizontalLoader';
import { AuthContext } from './context/auth-context';
import { UiContext } from './context/ui-context';
function App() {
    const uiContext = useContext(UiContext);
  return (
    <>
     
     {uiContext.isLoading && <HorizontalLoader/>  } 
      <Navbar />
      <Routes>
        
        <Route element={<Home />} exact path='/' />

        <Route element={<Schemes />}  path='/schemes/search/*' />

        

        <Route element={<About />} exact path='/about' />

        <Route element={<Login />} exact path='/login' />
         <Route element={<Signup />} exact path='/signup' /> 
        <Route element={<UserProfile/> } exact path = '/profile' />
        <Route element={<FilterForm /> } exact path = '/filterform' />
        <Route element={<Footer/> } exact path = '/Footer' />

        <Route element={<HowItWorks/> } exact path = '/HowItWorks' />

        <Route element={<SchemesDetails/>} exact path = '/SchemesDetails' />

      </Routes>
    </>
  );
}

export default App;
