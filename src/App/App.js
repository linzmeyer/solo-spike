import React, { Component } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Beverage from '../Beverage/Beverage';

class App extends Component {
  
  render() {
    return (
      <div className="wrapper">

        <div className="all-icons" >
          <h4>All Icons:</h4>
          <FontAwesomeIcon icon={['fab', 'apple']} />
          <FontAwesomeIcon icon={['fab', 'microsoft']} />
          <FontAwesomeIcon icon={['fab', 'google']} />
          <FontAwesomeIcon icon={"coffee"} />
          <FontAwesomeIcon icon="check-square" />
          <FontAwesomeIcon icon="anchor" spin />
          <FontAwesomeIcon icon={['fab', 'react']} size='10x'/>
        </div>
        <hr></hr>

        {/* Navigation */}
        <nav className="main-nav">
          <ul>
            <li><FontAwesomeIcon icon="home" /><a href="#">Home</a></li>
            <li><FontAwesomeIcon icon="info-circle" /><a href="#">About</a></li>
            <li><FontAwesomeIcon icon="people-carry" /><a href="#">Services</a></li>
            <li><FontAwesomeIcon icon={["far", "address-book"]} /><a href="#">Contact</a></li>
          </ul>
        </nav>

        {/* Top Container */}
        <section className="top-container">
          <header className="showcase">
            <h1>Your Web Presence</h1>
            <p>
              Fugiat nulla laborum sunt reprehenderit nulla sit sunt sit velit enim pariatur dolore proident.
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
            <FontAwesomeIcon icon="chart-pie" size='4x' />
            <h3>Analytics</h3>
            <p>Cupidatat labore veniam non veniam ut consectetur qui velit veniam aliquip.</p>
          </div>
          <div className="box">
            <FontAwesomeIcon icon="globe" size='4x' />
            <h3>Marketing</h3>
            <p>Cupidatat labore veniam non veniam ut consectetur qui velit veniam aliquip.</p>
          </div>
          <div className="box">
            <FontAwesomeIcon icon="cog" size='4x' />
            <h3>Development</h3>
            <p>Cupidatat labore veniam non veniam ut consectetur qui velit veniam aliquip.</p>
          </div>
          <div className="box">
            <FontAwesomeIcon icon="users" size='4x' />
            <h3>Support</h3>
            <p>Cupidatat labore veniam non veniam ut consectetur qui velit veniam aliquip.</p>
          </div>
        </section>

        {/* Info Section */}
        <section className="info">
          <img src='./img/pic1.jpg' alt="..." />
          <div>
            <h2> Your Business On The Web</h2>
            <p>
              Mollit minim ullamco cillum deserunt. Voluptate minim irure ullamco Lorem excepteur minim velit sunt reprehenderit. Sit ad irure ut consectetur. Magna ea velit aute mollit. Duis deserunt anim qui consectetur. Excepteur ipsum sit laborum aute sunt exercitation ea qui minim Lorem ipsum dolor ad. Ex labore aute veniam velit est pariatur eu voluptate ad et adipisicing.
            </p>
            <a href="#" className="btn" >Learn More</a>
          </div>
        </section>

        {/* Portfolio */}
        <section className="portfolio">
          <img src="https://source.unsplash.com/random/200x200" alt="..." />
          <img src="https://source.unsplash.com/random/201x200" alt="..." />
          <img src="https://source.unsplash.com/random/202x200" alt="..." />
          <img src="https://source.unsplash.com/random/203x200" alt="..." />
          <img src="https://source.unsplash.com/random/204x200" alt="..." />
          <img src="https://source.unsplash.com/random/205x200" alt="..." />
          <img src="https://source.unsplash.com/random/206x200" alt="..." />
          <img src="https://source.unsplash.com/random/207x200" alt="..." />
          <img src="https://source.unsplash.com/random/208x200" alt="..." />
        </section>

        {/* Footer */}
        <footer>
          <p>GridBiz <FontAwesomeIcon icon="copyright" size="xs" /> 2018</p>
        </footer>
        {/* Wrapper ends */}
      </div>
    );
  }
}

export default App;
