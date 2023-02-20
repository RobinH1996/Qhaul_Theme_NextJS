import { Provider } from 'react-redux'
import { store } from '../redux/store';
import { ToastContainer } from 'react-toastify';
import {persistStore} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import '../styles/index.scss';
import AppProvider from '../context/AppContext';
import Preloader from '../components/preloader';
import SEO from '../components/seo';
import { getAuth } from "firebase/auth";
import app from '../data/firebase.init';

let persistor = persistStore(store)


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


function MyApp({ Component, pageProps }) {

  return (
    <>
    <SEO font={'https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;900&display=swap'} />
      <Provider store={store}>
        <PersistGate loading={<Preloader/>} persistor={persistor}>
        <AppProvider>
          <Component {...pageProps} />
          <ToastContainer />
        </AppProvider>
        </PersistGate>
      </Provider>
    </>
  )
}

export default MyApp
