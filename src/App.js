import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainMenu from './components/MainMenu/MainMenu';
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ProductDetailPage from './pages/ProductsPage/ProductDetailPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import AboutPage from './pages/AboutPage/AboutPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import AboutPageMission from './pages/AboutPage/AboutPageMission';
import AboutPagePolicy from './pages/AboutPage/AboutPagePolicy';
import AboutPageIndex from './pages/AboutPage/AboutPageIndex';
import { setProducts } from './redux/productSlice';
import api from './api';
import { useDispatch } from 'react-redux'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // componentDidMount
  useEffect(() => {

    api.get('/shop-online/products')
      .then((response) => {
        if (response.status === 200) {
          const products = response.data;
          dispatch(setProducts(products));
          setLoading(false);
        }
      });

  }, []);

  return (
    <div className='format-name'>
      <Header />

      <MainMenu />


      {loading && (
        <div>Loading...</div>
      )}


      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />

        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/about-us" element={<AboutPage />}>
          <Route path="mission" element={<AboutPageMission />} />
          <Route path="policy" element={<AboutPagePolicy />} />
          <Route index element={<AboutPageIndex />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
