import { React, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { NavBar } from './Navbar.js';
import { Homepage } from './Homepage.js';
import { ComparisonPage } from './ComparisonPage';
import { ThreeComparisonPage } from './ThreeComparePage';
import { DetailsPage } from './DetailsPage'
import FavoritesPage  from './FavoritesPage.js';
import  Login  from './Login';
import {SearchDataTable} from './SearchDataTable'

function App(props) {

  return (
    <div>
      <header>
        <NavBar/>
      </header>

      <main>
        {/* <Homepage/> */} 
        {/* added in routing, does not work on add to favorites or compare in results of feature yet*/}
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          {/* please click the search button to navigate to the filter function in searchDataTale */}
          <Route path="search" element={<SearchDataTable/>}/>

          <Route path="comparisonPage" element={<ComparisonPage/>}/>
          <Route path="3comparisonPage" element={<ThreeComparisonPage/>}/>

          <Route path="favorites" element={<FavoritesPage/>}/>
          <Route path='details' element={<DetailsPage/>}/>
          <Route path='login' element={<Login/>}/>
        </Routes>
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