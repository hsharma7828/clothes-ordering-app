import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./components/layout/root";
import Clothes, { loader as productsLoader } from "./components/body/clothes";
import ErrorPage from "./components/layout/Errorpage";
import ProductsDetails, {
  loader as productLoader,
} from "./components/body/productDetails";
import ProductsRoot from "./components/layout/ProductsRoot";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/products",
        element: <ProductsRoot />,
        children: [
          { index: true, element: <Clothes />, loader: productsLoader },
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
