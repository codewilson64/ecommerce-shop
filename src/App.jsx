import { productsData } from "./api/Api";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductDisplay from "./components/ProductDisplay";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/ecommerce-shop",
        element: <Home />,
        loader: productsData,
      },
      {
        path: "/product/:id",
        element: <ProductDisplay />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
