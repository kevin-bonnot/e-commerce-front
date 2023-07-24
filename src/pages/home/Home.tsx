import {useContext} from 'react';
import useFetch from 'use-fetch-hook-renchglad/dist/useFetch';
import Product from '../../models/product.ts';
import {StoreContext} from '../../context/StoreContext.tsx';

const Home = () => {
  const store = useContext(StoreContext);
  const url = `${import.meta.env.VITE_API_BASE}store/1/product`;

  const product = useFetch<Product[]>(url);

  return (
    <>
      <h1>{store.name}</h1>
      {product.data?.map(elm => <p key={elm.name}>{elm.name}</p>)}
    </>
  );
};

export default Home;
