import './navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsCart } from 'react-icons/bs';
import { useState, useEffect } from 'react';

function NavBar() {
  const cart_counter = useSelector((state) => state.counterReducer.counter)
  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false)
  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()

    window.addEventListener("scroll", changeBackground)
  })

  return (
    <Navbar className={navbar ? "navbar active" : "navbar"} collapseOnSelect expand="lg" variant="dark" sticky='top'>
      <Container>
        <Navbar.Brand href="/home#/home"> <a className="brand" href="/home#/home">E-Commerce</a></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navy">
            <Link className="item" to="/home">
              Home
            </Link>
            <Link className="item" to="/contact-us">
              Contact Us
            </Link>
            <Link className="item" to="/shop">
              Shop
            </Link>
            <Link className="item" to="/login">
              Account
            </Link>
            <Link className="item" to='/cart'>
              <BsCart className='icon' /> {cart_counter}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
