import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import { ProductConsumer } from "../../context";
import CartTotals from "./CartTotals";
import firebase from "firebase";

export default class Cart extends Component {
	state = { isSignedIn: false };

	componentDidMount = () => {
		firebase.auth().onAuthStateChanged(user => {
			this.setState({ isSignedIn: !!user });
			console.log("user", user);
		});
	};
	render() {
		return (
			<>
				<ProductConsumer>
					{value => {
						const { cart } = value;
						if (cart.length > 0 || this.state.isSignedIn) {
							return (
								<>
									<Title name="your" title="cart " />
									<CartColumns />
									<CartList value={value} />
									<CartTotals value={value} history={this.props.history} />
								</>
							);
						} else {
							return <EmptyCart />;
						}
					}}
				</ProductConsumer>
			</>
		);
	}
															}
