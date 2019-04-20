import React, { Component } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Beverage from '../Beverage/Beverage';

class App extends Component {
  
  render() {
    return (
      <div className="wrapper">
        {/* Navigation */}
        <nav>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </nav>

        <div>
          Favorite Food: <FontAwesomeIcon icon="stroopwafel" />
        </div>

        {/* Top Container */}
        <section className="top-container">
          <header className="showcase">
            <h1>Your Web Presence</h1>
            <p>
              Fugiat nulla laborum sunt reprehenderit nulla sit sunt sit velit enim pariatur dolore proident. Quis deserunt ullamco do amet excepteur cillum aliquip eiusmod. Voluptate ad ut enim sint sit laboris sint amet exercitation velit elit.
            </p>
            <a href="#" className="btn" >Read More</a>
          </header>
          <div className="top-box top-box-a">
            <h4>Membership</h4>
            <p className="price">$199/mo</p>
            <a href="" className="btn">Buy Now</a>
          </div>
          <div className="top-box top-box-b">
            <h4>Pro Membership</h4>
            <p className="price">$299/mo</p>
            <a href="" className="btn">Buy Now</a>
          </div>
        </section>

        {/* Boxes Section */}
        <section className="boxes">
          <div className="box">
          </div>
        </section>
        <div>
          <FontAwesomeIcon icon={['fab', 'apple']} />
          <FontAwesomeIcon icon={['fab', 'microsoft']} />
          <FontAwesomeIcon icon={['fab', 'google']} />
          <FontAwesomeIcon icon={"coffee"} />
          <FontAwesomeIcon icon={"check-square"} />
          <FontAwesomeIcon icon="check-square" />
          <FontAwesomeIcon icon={['fab', 'react']} />
        </div>
        <Beverage />
      </div>
    );
  }
}

export default App;
