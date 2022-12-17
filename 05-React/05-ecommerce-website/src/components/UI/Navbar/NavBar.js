import React , {useState , useContext} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import './NavBar.css'
import CartContext from '../../../store/cart-context';
import {BrowserRouter as Router , Switch , Route , Link} from 'react-router-dom'
import About from '../../../pages/About';
import Product from '../../Products/Product';
import Card from '../Card/Card';

function NavBar(props) {
  const cartCtx = useContext(CartContext);
  
  const numberOfCartItems = cartCtx.items.reduce((curr, item)=>{
    return curr + item.quantity
  },0)

  return (
     <Router>
        <Navbar className='position-fixed' bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto item-center">
              <Nav.Link as={Link} to={"/store"}>Home</Nav.Link>
              <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
              <Nav.Link as={Link} to={"/store"}>Store</Nav.Link>
            </Nav>
            <Button onClick={props.onShowCart}  variant="primary">Cart<span>{numberOfCartItems}</span></Button>
          </Container>
        </Navbar>
        <div>
          <Switch>
          <Route path="/store">
              <Card />
              <Product />
            </Route>
            <Route path="/about">
              <Card />
              <About />
            </Route>
            <Route path="/">
              <Card />
              <Product />
            </Route>
          </Switch>
        </div>
      </Router> 
  );
}

export default NavBar;