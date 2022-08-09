import './Footer.scss';
import { useSelector } from 'react-redux'

function Footer(props) {
	const productIds = useSelector((state) => state.cart.productIds)

	const now = new Date();
	const year = now.getFullYear();

	return (
		<footer>
			Copyright &copy; {year}.
			You have {productIds.length} products in the cart.
		</footer>
	);
}

export default Footer;