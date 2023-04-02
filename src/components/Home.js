import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';

const Home = () => {
  
    return (
      <div className="container d-flex align-items-center h-1000">
    <div className="row">
      <header className="text-center col-12">
        <h1 className="text-uppercase"><strong>#GOVERNMENTSCHEMESFORYOU</strong></h1>
        <h3>Discover all Government schemes on one stop portal.</h3>
      </header>
      <div className="buffer col-12"></div>
      <section className="text-center col-12">
        <hr />
        <button className="btn btn-primary" type="button" name="Find" >Discover all schemes at one portal.</button>
      </section>
    </div>
  </div>
    )
}

export default Home;