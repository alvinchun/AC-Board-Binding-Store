import React, { Component } from 'react'
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Redirect } from "react-router-dom";
import ProductList from "./ProductList";


firebase.initializeApp({
	apiKey: "AIzaSyDLoqcbTDMFuurtAyDgVEKZ6qwo0j0Osjk",
	authDomain: "fir-auth-tutorial-ed11f.firebaseapp.com"
});

export default class Login extends Component {
    state = { isSignedIn: false };
    uiConfig = {
      signInFlow: "popup",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccess: () => false
      }
    };

    componentDidMount = () => {
      firebase.auth().onAuthStateChanged(user => {
        this.setState({ isSignedIn: !!user });
        console.log("user", user);
      });
    };

    render() {
      return (
							<div>
								{this.state.isSignedIn ? (
				          <Redirect exact path="/" component={ProductList} />
								) : (
									<StyledFirebaseAuth
										uiConfig={this.uiConfig}
										firebaseAuth={firebase.auth()}
									/>
								)}
							</div>
						);
    }
															}
