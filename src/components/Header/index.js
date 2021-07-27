import React, { useContext, useState } from 'react';
import { Container, Nav, Navbar, Button, Form, FormControl, CloseButton } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import BrejasContext from '../../BrejasContext';
import './styles.css';

import Avatar from '../../assets/avatar.png';

function Header({history}) {
    const notLoggedIcon = require('../../assets/not-logged.svg').default;
    const shoppingCartIcon = require('../../assets/shopping-cart.svg').default;
    const accessibiltyIcon = require('../../assets/accessibility.svg').default;
    const dropdownArrow = require('../../assets/dropdown.svg').default;
    const context = useContext(BrejasContext);
    const [modalOpen, setModalOpen] = useState(false);

    const validateLoggedUser = () => {
        if (context.loggedUser) history.push('/checkout');
        else history.push('/login');
    }

    return (
        <>
            <Navbar role="navigation" aria-label="Primary">
                <Container>
                <Navbar.Brand><Link to="/">Brejas.com</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end"  style={{ width: "100%" }}>
                    <Form inline="true" className="navbar-search-bar">
                        <FormControl role="search" type="text" title="Pesquisar" placeholder="Faça sua pesquisa" className="mr-sm-2" />
                    </Form>
                    {context.loggedUser ? 
                        <div className="navbar-logged-user" onClick={() => {context.setLoggedUser(false)}}>
                            <img className="navbar-logged-user-avatar" src={Avatar} alt="Avatar" />
                            <div>
                                João
                                <img className="navbar-logged-user-dropdown" src={dropdownArrow} alt="Opções da conta" />
                            </div>
                        </div>
                        :
                        <Button className="navbar-login-btn" onClick={() => history.push('/login')}>
                            Entrar<img className="navbar-login-icon" src={notLoggedIcon} alt='Não logado'/>
                        </Button>
                    }
                    <div className='navbar-shopping-cart'>
                    <Nav.Link onClick={validateLoggedUser}><img className="navbar-shopping-cart-icon" src={shoppingCartIcon} alt='Carrinho'/></Nav.Link>
                    {context.itemsOnCart > 0 && <div className="navbar-shopping-cart-indicator">1</div>}
                    </div>
                    <Nav.Link onClick={() => setModalOpen(true)}><img className="navbar-accessibility-icon" src={accessibiltyIcon} alt='Acessibilidade'/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <dialog open={modalOpen} className="accessibility-modal">
                <div className="accessibility-modal-content">
                    <Button>Ativar auto contraste</Button>
                    <div className="font-size-controllers">
                        <Button>a</Button>
                        <Button>A</Button>
                    </div>
                    <CloseButton onClick={() => setModalOpen(false)} className="accessibilty-modal-close"/>
                </div>
            </dialog>
        </>
    );
}

export default withRouter(Header);