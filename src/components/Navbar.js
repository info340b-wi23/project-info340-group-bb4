import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const DEFAULT_USERS = [
    { userId: null, userName: "Log Out", userImg: '/img/null.png' }, //null user
    { userId: "penguin", userName: "Penguin", userImg: '/img/Penguin.png' },
    { userId: "parrot", userName: "Parrot", userImg: '/img/Parrot.png' },
    { userId: "zebra", userName: "Zebra", userImg: '/img/Zebra.png' },
  ]

export function NavBar(props) {
    const currentUser = props.currentUser;
    const {currentpage, changePage} = props;

    const NAV_NAMES_ARRAY = [{name:'HOME', url:'/'},
    {name:'COMPARE', url:'/comparisonPage'},
    {name:'FAVORITE', url:'/favorites'}];

    // const NAV_NAMES_ARRAY = ["HOME", "COMPARE","FAVORITE" ];

    const handleSignOut = (event) => {
        console.log("Signing out");
        signOut(getAuth());
    }


    const handleClick = (event) => {
        event.preventDefault();
        const chosenpage = event.target.name;
        changePage(chosenpage);
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
                        {/* <div className="nav-item d-inline-block login">
                            <a className="nav-link" href="profile.html">
                                <img src="img/profile.svg" alt="Login" width="50" height="50" className="d-inline-block"/>
                            </a>
                        </div> */}
                    </Navbar.Collapse>
                    {/* <div className="nav-item d-inline-block login">
                        <Link className="nav-link d-inline-block" to="/login">
                            <img src="img/profile.svg" alt="Login" width="50" height="50" className="d-inline-block"/>
                        </Link> */}
                        {/* <button className="btn btn-secondary d-inline-block" onClick={handleSignOut}>Sign Out</button> */}
                    {/* </div> */}

                    <div>
                        {currentUser ? (
                            <button className=" bt primary-bt" onClick={handleSignOut}>Sign Out</button> )
                            : (
                                <div className="nav-item d-inline-block login">
                                    <Link className="nav-link d-inline-block" to="/login">
                                        <img src="img/profile.svg" alt="Login" width="50" height="50" className="d-inline-block"/>
                                    </Link>
                                </div>
                            // <button className="bt primary-bt"><a href="/login" className="login">Login</a></button>
                            )}
                    </div>
                </div>
            </Navbar>
        </div>

    );
}
