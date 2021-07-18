import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import DetailsPage from "./Pages/DetailsPage";
import RegisterPage from "./Pages/RegisterPage";
import ShoppingCartPage from "./Pages/ShoppingCartPage";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={HomePage} />
      <Route path="/Register" exact component={RegisterPage} />
      <Route path="/ShoppingCart" exact component={ShoppingCartPage} />
      <Route path="/Product/:id" exact component={DetailsPage} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
