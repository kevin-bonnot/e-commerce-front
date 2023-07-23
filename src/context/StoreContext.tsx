import {createContext} from 'react';
import Store from '../models/store.ts';

export const StoreContext = createContext<Store>({
  id: 1,
  name: 'test',
  description: 'test description',
  logo: 'un beau logo',
  custom_color: '#945580'
});