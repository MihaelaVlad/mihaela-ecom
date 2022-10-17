import { createContext } from 'react';
import { useCart } from '../hooks';
import './../styles/index.css';

export const AppContext = createContext();
const initialValue = {
  cart: {
    qty: 0,
  },
};

function MyApp({ Component, pageProps }) {
  const cart = useCart();

  return (
    <AppContext.Provider value={{ cart }}>
      <Component {...pageProps} />;
    </AppContext.Provider>
  );
}

export default MyApp;
