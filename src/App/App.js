import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import fbConnection from '../helpers/data/connection';

import MyNavbar from '../components/pages/MyNavbar/MyNavbar';

fbConnection();

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyNavbar />
      </div>
    );
  }
}

export default App;
