import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'

//import CSS
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import 'whatwg-fetch'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUObxWidbsGdscV96Yn6RLJP8rN2WBE7A",
  authDomain: "faran-travel.firebaseapp.com",
  projectId: "faran-travel",
  storageBucket: "faran-travel.appspot.com",
  messagingSenderId: "685416530739",
  appId: "1:685416530739:web:a93bde7d7834c1990ab446"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



