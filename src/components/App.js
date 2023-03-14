import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';

//import the function from the realtime database module
import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue } from 'firebase/database'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import INITIAL_HISTORY from '../data/hoteldata.json'
import DEFAULT_USERS from '../data/users.json';

import { NavBar } from './Navbar.js';
import { Homepage } from './Homepage.js';
import { ComparisonPage } from './ComparisonPage';
import { DetailsPage } from './DetailsPage';
import FavoritesPage  from './FavoritesPage.js';
import  Login  from './Login';
import {SearchDataTable} from './SearchDataTable';

function App(props) {
  const [favoritesList, setFavorites] = useState([INITIAL_HISTORY]);
  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[0]) //initially null;
  const [hotelData, setHotelData] = useState([]);
  const [alertMessage, setAlertMessage] = useState(null);

  useEffect( () => {
    //log in a default user
    // loginUser(DEFAULT_USERS[1])

    onAuthStateChanged(getAuth(), function(firebaseUser) {
      if(firebaseUser) { //not null, so signed in
        //local changes
        firebaseUser.userId = firebaseUser.uid;
        firebaseUser.userName = firebaseUser.displayName;
        firebaseUser.userEmail = firebaseUser.email;
        setCurrentUser(firebaseUser);
      } 
      else { //signed out
        setCurrentUser('');
      }
    })

  }, []);


  if(currentUser && favoritesList !== undefined && favoritesList.length > 0){
    const sortedFavList = favoritesList
    .filter((favLObj) => {
      return favLObj.userEmail === currentUser.userEmail;
      })
  }

  useEffect(() => {
    if(currentUser == null){
      return;
    }
    const db = getDatabase();
    const currentUserDataRef = ref(db, "userData/"+currentUser.userId);
    onValue(currentUserDataRef, (snapshot) => {
      const value = snapshot.val();
    })
  }, [currentUser])


  const loginUser = (userObj) =>{
    setCurrentUser(userObj)
  }

  const addFav = (userObj, code, from, to, fClass, price, dur, dist, flight, date, hotel, day, hprice, totalp) => {
    const newFav = {
      "userId": userObj.userId,
      "userName": userObj.userName,
      "travelCode": code,
      "from": from,
      "to": to,
      "class": fClass,
      "flightprice": price,
      "flightDur": dur,
      "flightDist": dist,
      "flight": flight,
      "date": date,
      "hotel": hotel,
      "days": day,
      "hotelprice": hprice,
      "totalprice": totalp
    }
    const db = getDatabase();
    const allFavRef = ref(db, "travel");
    firebasePush(allFavRef, newFav);
  }


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
      if (favoritesList.includes(card)) return;
      setFavorites([...favoritesList, card]);
    }
  }

  const getData=()=>{
    let fetchingUrl = 'data/hoteldata.json';
    fetch(fetchingUrl
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if(data.resultCount === 0){
          setAlertMessage("No results found.");
        }
        setHotelData(data);
      })
      .catch((error) => {
        setAlertMessage(error.message);
      })
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <div>
      <header>
        <NavBar currentUser={currentUser}/>
      </header>

      <main>
        {/* <Homepage/> */} 
        {/* added in routing, does not work on add to favorites or compare in results of feature yet*/}
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          {/* please click the search button to navigate to the filter function in searchDataTale */}
          <Route path="search/*" element={<SearchDataTable hotelData = {hotelData} alertMessage = {alertMessage} toggleFavorite={toggleFavorite}/>}/>
          <Route path="details" element={<DetailsPage/>}/>
          <Route path="comparisonPage" element={<ComparisonPage/>}/>

          <Route path='login' element={<Login currentUser={currentUser} loginUserFunction={loginUser} />} />

          {/* <Route path="favorites" element={<FavoritesPage currentUser={currentUser} favoritesList={favoritesList} toggleFavorite={toggleFavorite}/>}/> */}

          <Route element={<ProtectedPage currentUser={currentUser} />} >
            <Route path="favorites" element={<FavoritesPage currentUser={currentUser} toggleFavorite={toggleFavorite} favArray={favoritesList} howToAddFav={addFav}/>}/>
          </Route>

          {/* <Route path='details' element={<DetailsPage currTravel={'123'}/>}/> */}
          
          <Route path="*" element={<Navigate replace to="/"/>} />
        </Routes>
      </main>


      <footer className='footerBox'>
        <div className='footer'>
          <p className="footerp">
              &copy; INFO 340 Project, by Amy Sun <a href="mailto:asun8@uw.edu"> (asun8@uw.edu) </a>, Xuemin Jessi Zeng<a href="mailto:xuemiz@uw.edu"> (xuemiz@uw.edu) </a>, Ella Kim<a href="mailto:jk925@uw.edu"> (jk925@uw.edu) </a>, Shirley Yao<a href="mailto:yuhuiyao@uw.edu"> (yuhuiyao@uw.edu) </a>
          </p>
          <p className="footerp">Images in this page were found on Google</p>
          <p className="footerp">Data from <a href="https://www.kaggle.com/datasets/leomauro/argodatathon2019?resource=download&select=hotels.csv">Kaggle</a></p>
        </div>
      </footer>
    </div>
    
  );
}

function ProtectedPage(props) {
  //...determine if user is logged in
  if(props.currentUser.userName === null) { //not undefined at all (no user)
    return <Navigate to="/login"/>
  }
  else if(props.currentUser.userId === null){ //starting null user
    return <p>Spinner</p>;
  }
  else { //otherwise, show the child route content
    return <Outlet />
  }
}

export default App;