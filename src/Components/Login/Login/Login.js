import React, { useContext } from 'react';
import firebase from "firebase/app";
import firebaseConfig from './firebase.config';
import "firebase/auth";
import NavBar from '../../Home/NavBar/NavBar';
import { FcGoogle } from 'react-icons/fc';
import './Login.css'
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';

if(firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const [loggedInUser, setLoggedInuser] = useContext(UserContext);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleLogin = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
            const user = result.user;
            const userInfo = {
                name: user.displayName,
                email: user.email
            };
            setLoggedInuser(userInfo);
            history.replace(from);
            setUserToken();
        }).catch((error) => {
            console.log(error);
        });
    }
    const setUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
            sessionStorage.setItem('token', idToken);
          }).catch(function(error) {
           
          });
    }

    return (
        <div className="container">
            <NavBar></NavBar>
            <div className="text-center">
            <button onClick={handleGoogleLogin} className="btn googleSignIn">  <FcGoogle/> Continue With Google </button>
            </div>
        </div>
    );
};

export default Login;