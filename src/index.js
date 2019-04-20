import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';

//---------- FONT AWESOME ------------------------------------------------------

// import Font Awesome Library
import { library } from '@fortawesome/fontawesome-svg-core'
// import Font Awesome Icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

// add icons to library
library.add( fab, faStroopwafel, faCheckSquare, faCoffee );

//-------End FONT AWESOME ------------------------------------------------------


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
