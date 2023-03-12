import { React, useState, useEffect } from 'react';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';

//import the function from the realtime database module
import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue } from 'firebase/database'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import INITIAL_HISTORY from '../data/hoteldata.json'
import DEFAULT_USERS from '../data/users.json';

import { NavBar } from './Navbar.js';
import { Homepage } from './Homepage.js';
import { ComparisonPage } from './ComparisonPage';
import { ThreeComparisonPage } from './ThreeComparePage';
import { DetailsPage } from './DetailsPage';
import FavoritesPage  from './FavoritesPage.js';
import  Login  from './Login';
import {SearchDataTable} from './SearchDataTable';
import { CostList } from './CompareHelper.js';
//import HOTEL_DATA from '../data/hoteldata.json';


function App(props) {
  const [favoritesList, setFavorites] = useState([INITIAL_HISTORY]);
  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[0]) //initially null;
  const [hotelData, setHotelData] = useState([]);
  const [alertMessage, setAlertMessage] = useState(null);
  console.log("rendering App with user", currentUser);

  useEffect( () => {
    //log in a default user
    //loginUser(DEFAULT_USERS[1])

    onAuthStateChanged(getAuth(), function(firebaseUser) {
      console.log("someone logged in or logged out!");
      if(firebaseUser) { //not null, so signed in
        //local changes
        firebaseUser.userId = firebaseUser.uid;
        firebaseUser.userName = firebaseUser.displayName;
        firebaseUser.userImg = firebaseUser.photoURL || "/img/null.png";
        console.log(firebaseUser);        
      } 
      else { //signed out
        console.log("signed out!");
      }
      setCurrentUser(firebaseUser);
    })

    //hook up a listener to Firebase
    const db = getDatabase();
    const allFavRef = ref(db, "allFav");

    //fetch message data from firebase
    onValue(allFavRef, function(snapshot) {
      const allFavObj = snapshot.val();
      const objKeys = Object.keys(allFavObj);
      const objArray = objKeys.map((keyString) => {
        allFavObj[keyString].key = keyString;
        return allFavObj[keyString];
        
      })
      setFavorites(objArray); //update state & rerender
    });
  }, []);

  const loginUser = (userObj) =>{
    console.log("logging in as", userObj.userName);
    setCurrentUser(userObj)
  }

  const addFav = (userObj, card) => {
    const newFav = {
      "userId": userObj.userId,
      "userName": userObj.userName,
      "card": card,
    }
    const db = getDatabase();
    const allFavRef = ref(db, "allFav");
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
        // console.log(response)
        return response.json();
      })
      .then((data) => {
        if(data.resultCount == 0){
          setAlertMessage("No results found.");
        }
        // console.log(data)
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
          <Route path="search/*" element={<SearchDataTable hotelData = {hotelData} alertMessage = {alertMessage} toggleFavorite={toggleFavorite}/>}/>

          {/* <Route path="comparisonPage" element={<ComparisonPage/>}/> */}
          <Route path="comparisonPage" element={<ThreeComparisonPage/>}/>

          <Route path="favorites" element={<FavoritesPage currentUser={currentUser} favoritesList={favoritesList} toggleFavorite={toggleFavorite}/>}/>

          <Route element={<ProtectedPage currentUser={currentUser} />} >
            <Route path="fav/:userName?" element={
              <FavoritesPage 
                currentUser={currentUser} 
                favArray={favoritesList}
                howToAddFav={addFav}
                />
            } />
            {/* <Route path="profile" element={<ProfilePage currentUser={currentUser} />}/> */}
          </Route>




          {/* <Route path='details' element={<DetailsPage currTravel={'123'}/>}/> */}
          <Route path='login' element={<Login currentUser={currentUser} loginUserFunction={loginUser} />} />
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

function ProtectedPage(props) {
  //...determine if user is logged in
  if(props.currentUser === null) { //not undefined at all (no user)
    return <Navigate to="/signin"/>
  }
  else if(props.currentUser.userId === null){ //starting null user
    return <p>Spinner</p>;
  }
  else { //otherwise, show the child route content
    return <Outlet />
  }
}

export default App;