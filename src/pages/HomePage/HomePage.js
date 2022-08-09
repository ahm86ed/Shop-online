import { useSelector, useDispatch } from 'react-redux'
import { setName } from './../../redux/userSlice';
import banner from './best-deal-banner.jpg';
import Product from './../../components/Products/Product/Product';

function HomePage() {
    const products = useSelector((state) => state.product.list);
    const dispatch = useDispatch();

    const handleClick = (name) => {
        dispatch(setName(name));
    }

    return (
        <main>
            <h1>Welcome</h1>

            <button
                onClick={() => handleClick('Mary')}
            >Change to Mary</button>

            <button
                onClick={() => handleClick('John')}
            >Change to John</button>

            <img
                src={banner}
                alt='Big Deals'
                style={{
                    width: '100%',
                    marginTop: 20
                }}
            />

            {products
                .filter((product) => product.salesOff > 0)
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
        </main>
    );
}

export default HomePage;