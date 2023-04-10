import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

function App() {
  return (
    <>
      <SEO />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
