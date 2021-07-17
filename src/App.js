import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterPage from "./Pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/react_ecommerce" exact component={HomePage} />
      <Route path="/Register" exact component={RegisterPage} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
