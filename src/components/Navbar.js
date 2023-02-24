import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function NavBar(props) {
    const {currentpage, changePage} = props;

    const NAV_NAMES_ARRAY = [{name:'HOME', url:'/'},
    {name:'COMPARE', url:'/comparisonPage'},
    {name:'FAVORITE', url:'/favorites'}];

    // const NAV_NAMES_ARRAY = ["HOME", "COMPARE","FAVORITE" ];


    const handleClick = (event) => {
        event.preventDefault();
        console.log(event.target);
        const chosenpage = event.target.name;
        changePage(chosenpage);
    }

    const liArray = NAV_NAMES_ARRAY.map((navNameString) => {
        const liElem = (
          <li className="nav-item" key={navNameString}>
            <Nav.Link className="nav-link" href={navNameString.url}>{navNameString.name}</Nav.Link>
            {/* <a 
              name={navNameString}
              onClick={handleClick}
              href={"/"+navNameString}>{navNameString}
            </a> */}
          </li>
        )
        return liElem; //put it in the new array
    })

    return (
        <div>
            <Navbar expand="md" className="navbar">
                <div className="container-fluid">
                    <Navbar.Brand href="/">
                        <img src="img/noun-world-travel-5074160.svg" alt="Logo" width="60" height="60" className="d-inline-block" />
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
                    <div className="nav-item d-inline-block login">
                        <a className="nav-link" href="profile.html">
                            <img src="img/profile.svg" alt="Login" width="50" height="50" className="d-inline-block"/>
                        </a>
                    </div>
                </div>
            </Navbar>
        </div>

    );
}
