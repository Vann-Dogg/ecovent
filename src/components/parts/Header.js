import React from 'react'
import * as ReactBS from 'react-bootstrap'
import logo from './logo.svg'

function Header() {
    return (
        <header id="header">
            <ReactBS.Navbar bg="dark" variant="dark">
                <ReactBS.Container>
                    <ReactBS.Navbar.Brand href="#home">
                        <img 
                            src={logo}
                            width="38"
                            height="38"
                            alt="logo"
                        />
                        Ecovent Service
                    </ReactBS.Navbar.Brand>
                    <ReactBS.Nav className="ml-auto">
                        <ReactBS.Nav.Link href="#home">Home</ReactBS.Nav.Link>
                        <ReactBS.Nav.Link href="#features">Features</ReactBS.Nav.Link>
                        <ReactBS.Nav.Link href="#pricing">Pricing</ReactBS.Nav.Link>
                    </ReactBS.Nav>
                </ReactBS.Container>
            </ReactBS.Navbar>
        </header>
    )
}

export default Header