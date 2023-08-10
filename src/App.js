import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./components/layout/root";
import Home, { loader as productsLoader } from "../src/components/layout/home";
import Clothes from "./components/body/clothes";
import ErrorPage from "./components/layout/Errorpage";
import ProductsDetails, {
  loader as productLoader,
} from "./components/layout/productDetails";
import ProductsRoot from "./components/layout/ProductsRoot";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    id: "home",
    errorElement: <ErrorPage />,
    loader: productsLoader,
    children: [
      { path: "/home", element: <Home /> },
      {
        path: "/products",
        element: <ProductsRoot />,
        children: [
          { index: true, element: <Clothes /> },
          {
            path: ":productId",
            loader: productLoader,
            element: <ProductsDetails />,
          },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
