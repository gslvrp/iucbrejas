import React from 'react';
import { Container, Nav, Navbar, Button, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';

function Header() {
    const notLoggedIcon = require('../../assets/not-logged.svg').default;
    const shoppingCartIcon = require('../../assets/shopping-cart.svg').default;
    const accessibiltyIcon = require('../../assets/accessibility.svg').default;

    return (
        <Navbar>
            <Container>
            <Navbar.Brand><Link to="/">Brejas.com</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end"  style={{ width: "100%" }}>
                <Form inline className="navbar-search-bar">
                    <FormControl type="text" placeholder="Faça sua pesquisa" className="mr-sm-2" />
                </Form>
                <Button className="navbar-login-btn">
                    <Link to="/login">
                        Entrar<img className="navbar-login-icon" src={notLoggedIcon} alt='Não logado'/>
                    </Link>
                </Button>
                <Nav.Link href="/checkout"><img className="navbar-shopping-cart-icon" src={shoppingCartIcon} alt='Carrinho'/></Nav.Link>
                <Nav.Link href="#home"><img className="navbar-accessibility-icon" src={accessibiltyIcon} alt='Acessibilidade'/></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;