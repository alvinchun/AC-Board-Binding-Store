import React, { Component } from "react";
import Product from "./Product";
// import Title from "./Title";
// Using context API
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
	render() {
		return (
			<>
				<div className="py-5">
					<div className="container">
						{/* <Title name="Welcome!" title="Check out these products" /> */}

						<div className="row">
							<ProductConsumer>
								{value => {
									return value.products.map(product => {
										return <Product key={product.id} product={product} />;
									});
								}}
							</ProductConsumer>
						</div>
					</div>
				</div>
				{/* <Product /> */}
			</>
		);
	}
}
