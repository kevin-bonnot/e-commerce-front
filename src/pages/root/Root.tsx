import {Link, Outlet} from 'react-router-dom';
import {StoreContext} from '../../context/StoreContext.tsx';
import useFetch from 'use-fetch-hook-renchglad/dist/useFetch';
import Store from '../../models/store.ts';

const Root = () => {
  const url = 'http://localhost:3000/api/store/1';
  const store = useFetch<Store>(url);
  if (store.error) {
    return <h1>Erreur</h1>;
  }

  if (store.loading) {
    return <h1>Loading</h1>;
  }

  return store.data && <>
    <div>
      <h1>{store.data.name}</h1>
      <nav>
        <ul>
          <li>
            <Link to="/home">Accueil</Link>
          </li>
          <li>
            <Link to="/products">Produits</Link>
          </li>
        </ul>
      </nav>
    </div>
    <div>
      <StoreContext.Provider value={store.data}>
        <Outlet />
      </StoreContext.Provider>
    </div>
  </>;
};

export default Root;
