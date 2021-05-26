import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from '../../assets/icons/logoYelder.png'

import './myNavbar.style.css';

const myNavbar = () => {
    return (
        <>
      
  <Navbar collapseOnSelect="true" fixed="top" expand="md" variant="dark" className="animate-navbar nav-theme justify-content-between" >
  <Navbar.Brand href="#home">
      <img className="logo" src={Logo} alt='My personal logo'/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Inicio</Nav.Link>
      <Nav.Link href="#sobremi">Sobre mi</Nav.Link>
      <Nav.Link href="#misherramientas">Herramientas</Nav.Link>
      <Nav.Link href="#formacion">Formación</Nav.Link>
      <Nav.Link href="#proyectos">Proyectos</Nav.Link>
      <Nav.Link href="#contacto">Contacto</Nav.Link>
    </Nav>

  </Navbar.Collapse>
  
</Navbar>   
        </>
    )
}

export default myNavbar
