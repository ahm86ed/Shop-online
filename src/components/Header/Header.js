import './Header.scss';
import { FaTags, FaUserAlt } from 'react-icons/fa';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'

function Header(props) {
	const name = useSelector((state) => state.user.name)
	const productIds = useSelector((state) => state.cart.productIds);

	let navigate = useNavigate();
	const handleCartClick = () => {
		//window.location.href = '/checkout';
		navigate("/checkout");
	}

	return (
		<header>
			<div className='title'>
				<FaTags /> <strong>Shop</strong> Online
			</div>
			<div className='user'>
				<FaUserAlt /> {name}
			</div>
			<button onClick={handleCartClick}><RiShoppingCart2Fill /> {productIds.length}</button>
		</header>
	);
}

export default Header;