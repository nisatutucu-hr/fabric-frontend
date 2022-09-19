import Products from "../components/Products";
import ProductDetail from "../components/Products/ProductDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./startup.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route
            path="/products/product-detail/:productId"
            element={<ProductDetail />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
