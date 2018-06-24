import React, { Component } from 'react';
import WebDesignIcon from './WebDesignIcon';

class IconTest extends Component {
  constructor(props) {
    super(props);

  }


  render() {

    return (
      <div style={{ textAlign: 'center', maxWidth: 400, marginTop: 200, backgroundColor: 'aqua' }}>
        {/* <img src='web-design.svg' style={{ marginTop: 200, maxWidth: 600 }} /> */}
        <WebDesignIcon />
      </div>

    )
  }

}

export default IconTest;