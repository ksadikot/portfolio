import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Kaid Sadikot',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'Aout', path: '/about' }
      ],
      home: {
        title: 'Welcome to my website',
        subtitle: 'This is what I\'ve done'
      },
      about: {
        title: 'About Me'
      }

    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Kaid Sadikot</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ms-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} />} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />} />

          <Footer/>
        </Container>

        
      </Router>
    );
  }

}

export default App;
