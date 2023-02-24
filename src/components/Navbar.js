import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function NavBar(props) {
    const {currentpage, changePage} = props;

    // const NAV_NAMES_ARRAY = [{name:'HOME', url:'/'},
    // {name:'COMPARE', url:'/2comparisonPage.html'},
    // {name:'FAVORITE', url:'/favorites.html'}];

    const NAV_NAMES_ARRAY = ["HOME", "COMPARE","FAVORITE" ];


    const handleClick = (event) => {
        event.preventDefault();
        console.log(event.target);
        const chosenpage = event.target.name;
        changePage(chosenpage);
    }

    const liArray = NAV_NAMES_ARRAY.map((navNameString) => {
        const liElem = (
          <li key={navNameString}>
            <a 
              name={navNameString}
              onClick={handleClick}
              href={"/"+navNameString}>{navNameString}</a>
          </li>
        )
        return liElem; //put it in the new array
    })

    return (
        <div>
            {/* <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="index.html">
                        <img src="img/noun-world-travel-5074160.svg" alt="Logo" width="60" height="60" className="d-inline-block" />
                        Faran
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {liArray}
                            </li>
                            <li className="nav-item d-inline-block login">
                                <a className="nav-link" href="profile.html">
                                    <img src="img/profile.svg" alt="Login" width="50" height="50" className="d-inline-block"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}

            <Navbar expand="lg" className="navbar">
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
                    </Navbar.Collapse>
                    {/* <div className="nav-item d-inline-block login">
                        <a className="nav-link" href="profile.html">
                            <img src="img/profile.svg" alt="Login" width="50" height="50" className="d-inline-block"/>
                        </a>
                    </div> */}
                </div>
            </Navbar>
        </div>

    
//     return(
//         <div>
        // <Navbar expand="md" className="navbar">
        //     <div className="container-fluid p-3">
        //         <Navbar.Brand href="/">Moody</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav>
        //             <ul className="navbar-nav">
        //                 {navbar}
        //             </ul>
        //             </Nav>
        //         </Navbar.Collapse>
        //         <div className="sign-register">
        //         {currentUser ? (
        //             <button className="primary-bt" onClick={handleSignOut}>Sign Out</button> )
        //             : (
        //             <button className="primary-bt" ><a href="/login" className="login">Login</a></button>
        //             )}
        //         </div>
        //     </div>

        //     </Navbar>
//         </div>
//     );

    );
}
