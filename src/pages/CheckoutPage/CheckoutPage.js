import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import Product from './../../components/Products/Product/Product';
import { useSelector } from 'react-redux'

export default function CheckoutPage() {
    const products = useSelector((state) => state.product.list);
    const productIds = useSelector((state) => state.cart.productIds);

    return (
        <main>
            <h1>Checkout</h1>
            {productIds.length > 0 ? (
                <>
                    <p>List of products</p>
                    {products
                        .filter((product) => productIds.includes(product.id))
                        .map(
                            (product, index) => {
                                return (
                                    <Product
                                        key={index}
                                        product={product}
                                    />
                                );
                            }
                        )}

                    <h2>Order submission</h2>
                    <CheckoutForm />
                </>
            ) : (
                <div>No products in the cart.</div>
            )}


        </main>
    );
}
