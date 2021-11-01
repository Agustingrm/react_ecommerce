import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import DetailsPage from "./Pages/DetailsPage";
import RegisterPage from "./Pages/RegisterPage";
import ShoppingCartPage from "./Pages/ShoppingCartPage";
import GlobalState from "./Context/GlobalState";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const style = {
    pageContainer: {
      position: "relative",
      minHeight: "100vh",
    },
    contentWrap: {
      paddingBottom: "40px",
    },
  };
  return (
    <GlobalState>
      <BrowserRouter basename="/react_ecommerce">
        <div style={style.pageContainer}>
          <div style={style.contentWrap}>
            <Header />
            <Route path="/" exact component={HomePage} />
            <Route path="/Login" exact component={LoginPage} />
            <Route path="/Register" exact component={RegisterPage} />
            <Route path="/ShoppingCart" exact component={ShoppingCartPage} />
            <Route path="/Product/:id" exact component={DetailsPage} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
