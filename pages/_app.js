import "../styles/globals.css";
import Footer from "./component/layout/footer";
import Navbar from "./component/layout/navbar";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
