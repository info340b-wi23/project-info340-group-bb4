import { React, useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { NavBar } from './Navbar.js';
import { Homepage } from './Homepage.js';
import { ComparisonPage } from './ComparisonPage';
import { ThreeComparisonPage } from './ThreeComparePage';
import { DetailsPage } from './DetailsPage';
import FavoritesPage  from './FavoritesPage.js';
import  Login  from './Login';
import {SearchDataTable} from './SearchDataTable';
//import HOTEL_DATA from '../data/hoteldata.json';

function App() {

  const [favoritesList, setFavorites] = useState([]);

  //useEffect for maintaining favorites list
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoritesList');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favoritesList', JSON.stringify(favoritesList));
  }, [favoritesList]);

  function toggleFavorite(card) {
    if (favoritesList.includes(card)) {
      setFavorites(favoritesList.filter(favorite => favorite !== card));
    } else {
      setFavorites([...favoritesList, card]);
    }
  }

  return (
    <div>
      <header>
        <NavBar/>
      </header>

      <main>
        {/* <Homepage/> */} 
        {/* added in routing, does not work on add to favorites or compare in results of feature yet*/}
        <Routes>
          <Route path="/" element={<Homepage/>}>
            <Route path=":locTo" element={<DetailsPage/>}/>
          </Route>
          {/* please click the search button to navigate to the filter function in searchDataTale */}
          <Route path="search/*" element={<SearchDataTable toggleFavorite={toggleFavorite}/>}/>

          <Route path="comparisonPage" element={<ComparisonPage/>}/>
          <Route path="3comparisonPage" element={<ThreeComparisonPage/>}/>

          <Route path="favorites" element={<FavoritesPage favoritesList={favoritesList} toggleFavorite={toggleFavorite}/>}/>
          {/* <Route path='details' element={<DetailsPage currTravel={'123'}/>}/> */}
          <Route path='login' element={<Login/>}/>
          <Route path="*" element={<Navigate replace to="/"/>} />
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