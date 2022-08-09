import './Product.scss';
import { addProduct, removeProduct } from './../../../redux/cartSlice';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from "react-router-dom";

function Product(props) {
	const productIds = useSelector((state) => state.cart.productIds);
	const dispatch = useDispatch();

	const inCart = productIds.includes(props.product.id);

	const handleAddClick = () => {
		const id = props.product.id;
		dispatch(addProduct(id));
	};

	const handleRemoveClick = () => {
		const id = props.product.id;
		dispatch(removeProduct(id));
	}

	const salesOff = props.product.salesOff;
	const salesPrice = props.product.price * (1 - salesOff / 100);

	return (
		<div className="product-item">
			<div className="card">
				<img
					src={"/images/" + props.product.imageName}
					alt={props.product.name}
				/>
				<div className="card-body">
					<h5 className="card-title">
						<NavLink to={"/products/" + props.product.id}>
							{props.product.name}
						</NavLink>
					</h5>

					{salesOff > 0 ? (
						<>
							<p className="card-text">On sale: {salesOff}% off</p>
							<p className="card-text">From ${props.product.price} for ${salesPrice}</p>
						</>
					) : (
						<p className="card-text">Price: ${props.product.price}</p>
					)}

					{inCart ? (
						<button onClick={handleRemoveClick}>Remove from cart</button>
					) : (
						<button onClick={handleAddClick}>Add to cart</button>
					)}

				</div>
			</div>
		</div >
	);
}

export default Product;