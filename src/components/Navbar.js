import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import { Button } from "semantic-ui-react";
import firebase from "firebase";
import "./Navbar.css"
export default class Navbar extends Component {
	state = { isSignedIn: false };

	componentDidMount = () => {
		firebase.auth().onAuthStateChanged(user => {
			this.setState({ isSignedIn: !!user });
			console.log("user", user);
		});
	};
	
	render() {
		return (
			<div className="navigation-bar">
				<div className="navbar-left">
					<div className="navbar-logo">
						<Link to="/">
							<img src={logo} alt="AC" className="logo-size" />
						</Link>
					</div>

					<div className="nav-title">
						{/* <ul className="navbar-nav align-items-center">
						<li className="nav-item ml-5"> */}
						<Link to="/" className="nav-link">
							Board & Binding Shop
						</Link>
						{/* </li>
					</ul> */}
					</div>
				</div>

				<div className="navbar-right">
					{this.state.isSignedIn ? (
						<Link to="/" className="sign-out">
							<Button
								inverted
								color="olive"
								className="cart-button"
								onClick={() => firebase.auth().signOut()}
							>
								Sign out
							</Button>
						</Link>
					) : (
						<Link to="/login">
							<Button inverted color="olive" className="cart-button">
								Log In
							</Button>
						</Link>
					)}

					{this.state.isSignedIn ? (
						<Link to="/cart" className="ml-auto">
							<Button inverted color="olive" className="cart-button">
								{/* font awesome cart icon */}
								{/* <span className="mr-2">
<i className="fas fa-cart-plus" />
</span> */}
								My Cart
								<span className="mr-2">
									<i className="fas fa-cart-plus" />
								</span>
							</Button>
						</Link>
					) : (
						""
					)}
				</div>

				{/* ml-auto = margin left auto (keeps the cart button at the right) */}
				{/* </NavWrapper> */}
			</div>
		);
	}
															}

// 1 rem is 16 px
// Boostrap uses rem for the default scale

