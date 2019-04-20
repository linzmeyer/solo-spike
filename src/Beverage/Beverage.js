import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Beverage extends Component {
  render() {
    return(
      <div>
        <FontAwesomeIcon icon="check-square" />
        Favorite beverage: <FontAwesomeIcon icon="coffee" />
      </div>
    );
  }
}

export default Beverage;