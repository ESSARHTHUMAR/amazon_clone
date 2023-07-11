import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CategoryProvider from "./Context/CategoryContext.jsx";
import ProductsProvider from "./Context/ProductsContext.jsx";
import { StateProvider } from "./Context/StateProvider.jsx";
import "./index.css";
import { initialState, reducer } from "./Reducers/reducer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductsProvider>
    <CategoryProvider>
      <React.StrictMode>
        <StateProvider reducer={reducer} initialState={initialState}>
          <App />
        </StateProvider>
      </React.StrictMode>
    </CategoryProvider>
  </ProductsProvider>
);
