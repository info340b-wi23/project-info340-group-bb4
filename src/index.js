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
  apiKey: "AIzaSyDNjdkXUjEhRU2vSqMjZMQ4s-3Ge5F2Pd0",
  authDomain: "project-info340-group-bb4.firebaseapp.com",
  databaseURL: "https://project-info340-group-bb4-default-rtdb.firebaseio.com",
  projectId: "project-info340-group-bb4",
  storageBucket: "project-info340-group-bb4.appspot.com",
  messagingSenderId: "381421838786",
  appId: "1:381421838786:web:b8e4bbc9e61c4b5d7c365b"
};

// Initialize Firebase
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



