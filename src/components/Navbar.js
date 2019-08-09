import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { Button } from "semantic-ui-react";


export default class Navbar extends Component {
	render() {
		return (
			<NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
				<Link to="/">
					<img src={logo} alt="AC" className="navbar-brand" />
				</Link>
				<ul className="navbar-nav align-items-center">
					<li className="nav-item ml-5">
						<Link to="/" className="nav-link">
							Board & Binding Shop
						</Link>
					</li>
				</ul>
				{/* ml-auto = margin left auto (keeps the cart button at the right) */}
				<Link to="/cart" className="ml-auto">
					<Button inverted color="olive" className="cart-button">
						{/* font awesome cart icon */}
						{/* <span className="mr-2">
							<i className="fas fa-cart-plus" />
						</span> */}
						
						 { "My Cart" + " "}
						<span className="mr-2">
							<i className="fas fa-cart-plus" />
						</span>
					</Button>
				</Link>
			</NavWrapper>
		);
	}
}

// 1 rem is 16 px
// Boostrap uses rem for the default scale
const NavWrapper = styled.nav`
	background: var(--mainBlue);
	.nav-link {
		color: var(--mainWhite) !important;
		font-size: 50px;
		text-transform: capitalize;
	}

	.navbar-brand {
		width: 50px;
		height: 80px;
	}

	.cart-button {
		width: 170px;
		height: 50px;
		font-size: 18px;
	}

	.fa-cart-plus:before {
		width: 100px;
	}

`;
