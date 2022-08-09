import { useParams } from 'react-router-dom';
import api from './../../api';
import { useState, useEffect } from 'react';

function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {

    api.get('/shop-online/products/' + params.id)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setProduct(response.data);
        }
      });

  }, []);

  return (
    <main>

      {product && (
        <>
          <h1>{product.name}</h1>
          <p>Price: {product.price}</p>
          <img
            src={"/images/" + product.imageName}
            alt={product.name}
            style={{ width: '100%' }}
          />
        </>
      )}

    </main>
  );
}

export default ProductDetailPage;