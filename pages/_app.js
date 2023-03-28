import Navbar from '../components/Navbar';
import "../styles/navbar.css"
import "../styles/home.css"
import "../styles/plants.css"

import 'bootstrap/dist/css/bootstrap.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;