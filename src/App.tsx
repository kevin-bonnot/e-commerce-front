import './App.css';
import Store from "./models/store.ts";
import useFetch from "use-fetch-hook-renchglad/dist/useFetch";
import Product from "./models/product.ts";
import {useState} from "react";

const App = () => {
  const [url, setUrl] = useState('http://localhost:3000/api/store/1');
  const store = useFetch<Store>(url);
  const product = useFetch<Product[]>('http://localhost:3000/api/store/1/product');

  if (store.error || product.error) {
    return <h1>Erreur</h1>;
  }

  if (store.loading || product.loading) {
    return <h1>Loading</h1>;
  }

  function handleClick() {
    setUrl('http://localhost:3000/api/store/2');
  }

  return (
    <>
      <h1>{store.data?.name}</h1>
      {product.data?.map(elm => <p>{elm.name}</p>)}
      <button onClick={handleClick}>Change url</button>
    </>
  );
};

export default App;
