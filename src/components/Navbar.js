import React from "react";

export function NavBar(props) {
    return(
        <nav className="navbar navbar-expand-lg">
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
                            <a className="nav-link active" aria-current="page" href="index.html">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="2comparisonPage.html">COMPARE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="favorites.html">FAVORITE</a>
                        </li>
                        <li className="nav-item d-inline-block login">
                            <a className="nav-link" href="profile.html">
                                <img src="img/profile.svg" alt="Login" width="50" height="50" className="d-inline-block"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
