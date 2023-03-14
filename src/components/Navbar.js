import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';



export function NavBar(props) {
    const currentUser = props.currentUser;

    const NAV_NAMES_ARRAY = [{name:'HOME', url:'/'},
    {name:'COMPARE', url:'/comparisonPage'},
    {name:'FAVORITE', url:'/favorites'}];


    const handleSignOut = (event) => {
        console.log("Signing out");
        signOut(getAuth());
    }

    const liArray = NAV_NAMES_ARRAY.map((navNameString) => {
        const liElem = (
          <li className="nav-item" key={navNameString}>
            <Nav.Link className="nav-link" href={navNameString.url}>{navNameString.name}</Nav.Link>
          </li>
        )
        return liElem; //put it in the new array
    })

    return (
        <div>
            <Navbar expand="md" className="navbar">
                <div className="container-fluid">
                    <Navbar.Brand href="/">
                        <img src="img/noun-world-travel-5074160.svg" alt="Logo" width="60" height="60" className="d-inline-block"/>
                        Faran
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarNav" />
                    <Navbar.Collapse id="navbarNav">
                        <Nav>
                            <ul className="navbar-nav">
                                {liArray}
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                    <div className="login">
                    {currentUser ? (
                        <button className="btn btn-secondary" onClick={handleSignOut}>Sign Out</button> )
                        : (
                        <Link className="nav-link d-inline-block" to="/login">
                            <img src="img/profile.svg" alt="Login" width="50" height="50" className="d-inline-block"/>
                        </Link>
                        )}
                    </div>
                </div>
            </Navbar>
        </div>

    );
}
