import Product from './Product/Product';
import { useSelector } from 'react-redux'

function Products(props) {
	const products = useSelector((state) => state.product.list);

	return (
		<div>
			{products.map(
				(product, index) => {
					return (
						<Product
							key={index}
							product={product}
						/>
					);
				}
			)}
		</div>
	);
}

export default Products;