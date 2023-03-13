import React  from 'react';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Navigate } from 'react-router-dom';



import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'; //install option 1


import DEFAULT_USERS from '../data/users.json';


const firebaseUIConfig = {
    signInOptions: [ //array of sign in options supported
      //array can include just "Provider IDs", or objects with the IDs and options
      { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
      GoogleAuthProvider.PROVIDER_ID
    ],
    signInFlow: 'popup', //don't redirect to authenticate
    credentialHelper: 'none', //don't show the email account chooser
    callbacks: { //"lifecycle" callbacks
      signInSuccessWithAuthResult: () => {
        return false; //don't redirect after authentication
      }
    }
}


export default function Login(props) {
    // const [email, updateEmail] = useState("");
    // const [name, updateName] = useState("");
    const auth = getAuth();
    // const update = props.update;
    const currentUser = props.currentUser;
    const loginFunction = props.loginUserFunction;

    if(currentUser.userName) { //if signed in
        return <Navigate to="/favorites" />
    }

    const handleClick = (event) => {
    const whichUser = event.currentTarget.name //access button, not image
    console.log(whichUser);
    const selectedUserObj = DEFAULT_USERS.filter((userObj) => userObj.userId === whichUser)[0] || DEFAULT_USERS[0] //null user if not found

    loginFunction(selectedUserObj)
  }

    return(
        <div className="card bg-light">
            <div className="container card-body">
            <StyledFirebaseAuth
                uiConfig={firebaseUIConfig} 
                firebaseAuth={getAuth()}  />
            </div>
        </div>
    
    );
}