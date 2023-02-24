import { React, useState } from 'react';
// import { Route, Routes } from 'react-router-dom';

import { NavBar } from './Navbar.js';
import { Homepage } from './Homepage.js';
import { HomeSearch } from './HomeSearch'
import { ComparisonPage } from './ComparisonPage';
import { DetailsPage } from './DetailsPage'

function App(props) {

  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main>
        {/* <Homepage/> */}
        {/* <HomeSearch/> */}
        <ComparisonPage/>
        {/* <DetailsPage/>  */}
      </main>


      <footer>
        <p className="footerp">
            &copy; INFO 340 Project, by Amy Sun <a href="mailto:asun8@uw.edu"> (asun8@uw.edu) </a>, Xuemin Jessi Zeng<a href="mailto:xuemiz@uw.edu"> (xuemiz@uw.edu) </a>, Ella Kim<a href="mailto:jk925@uw.edu"> (jk925@uw.edu) </a>, Shirley Yao<a href="mailto:yuhuiyao@uw.edu"> (yuhuiyao@uw.edu) </a>
        </p>
        <p className="footerp">Images in this page were found on Google</p>
      </footer>
    </div>
    
  );
}

export default App;