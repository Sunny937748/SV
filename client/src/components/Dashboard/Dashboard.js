import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import './Dashboard.css';
import Navbar from '../Navbar/Navbar';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    let shouldRedirect = false;
    if (localStorage.getItem('userTokenTime')) {
      // Check if user holds token which is valid in accordance to time
      const data = JSON.parse(localStorage.getItem('userTokenTime'));
      if (new Date().getTime() - data.time > (1 * 60 * 60 * 1000)) {
        // It's been more than hour since you have visited dashboard
        localStorage.removeItem('userTokenTime');
        shouldRedirect = true;
      }
    } else {
      shouldRedirect = true;
    }
  }

  componentDidMount() {
    if (localStorage.getItem('userTokenTime')) {
      axios.get('http://127.0.0.1:3333/api/home', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('userTokenTime')).token
        }
      })
    }
  }

  render() {
    if (this.state.redirect) return <Redirect to="/signIn" />
    return (
      <React.Fragment>
        <Navbar />
      </React.Fragment>
    );
  }
}

export default Dashboard;