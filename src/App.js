import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
const Product = lazy(() => import("./components/Product"));
const Cart = lazy(() => import("./components/Cart"));

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route 
        path="/" 
        element={
          <Suspense fallback={<p>🌀loading....</p>}>
            <Product />
          </Suspense> 
        }
        />
        <Route
          path="/cart"
          element={
            <Suspense fallback={<p>🌀loading....</p>}>
              <Cart />
            </Suspense> 
          }
        />
      </Routes>
    </>
  );
}

export default App;
