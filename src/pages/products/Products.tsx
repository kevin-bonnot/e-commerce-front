import useFetch from 'use-fetch-hook-renchglad/dist/useFetch';
import Product from '../../models/product.ts';
import ProductCard from '../../components/product-card/ProductCard.tsx';
import {Container} from '@mui/material';

const Products = () => {
  const product = useFetch<Product[]>('http://localhost:3000/api/store/1/product');

  if (product.error) {
    return <h1>Erreur</h1>;
  }

  if (product.loading) {
    return <h1>Chargement</h1>;
  }

  return product.data && <Container>
    {product.data.map(elm => <ProductCard key={elm.name} product={elm} />)}
  </Container>;
};

export default Products;
