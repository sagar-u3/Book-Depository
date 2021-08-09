import './App.css';
import React from 'react';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './components/login-signup/Login';
import Home from './components/home/home';
import Books from './components/books/Books';
import Authors from './components/authors/Authors';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Genres from './components/genres/Genre';
import BookDetail from './components/books/BookDetail';
import Signup from './components/login-signup/Signup';
import AuthorDetail from './components/authors/AuthorDetail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { logged_in: false }
  }

  render() {
    if (localStorage.getItem('token')) {
      return (<BrowserRouter>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand >Book Depository</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" exact>Home</Nav.Link>
                <Nav.Link as={Link} to="/books" exact>Books</Nav.Link>
                <Nav.Link as={Link} to="/authors" exact>Authors</Nav.Link>
                <Nav.Link as={Link} to="/genres" exact>Genres</Nav.Link>
              </Nav>
              <Navbar.Text>
                Signed in as: {localStorage.getItem('name')}
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books" exact component={Books} />
          <Route path="/books/:id" component={BookDetail} />
          <Route path="/authors" exact component={Authors} />
          <Route path="/authors/:id" component={AuthorDetail} />
          <Route path="/genres" exact component={Genres} />
        </Switch>
      </BrowserRouter >);
    }
    else {
      return <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </Switch>
      </BrowserRouter>
    }

  }
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
