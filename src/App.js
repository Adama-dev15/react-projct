import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./composants/header/header";
import HomePage from "./pages/homePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsProductById from "./pages/detailProduct/detailsProduct";
import PopDetail from "./composants/popDetail/popDetail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        {/* <Route path="/product/:productId" element={<DetailsProductById />} /> */}
        <Route path="/product/:productId" element={<PopDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
