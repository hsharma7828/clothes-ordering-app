import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./components/layout/root";
import Clothes, { loader as clothesLoader } from "./components/body/clothes";
import ClothesList from "./components/body/clothesList";
import ErrorPage from "./components/layout/Errorpage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/products",
        element: <Clothes />,
        loader: clothesLoader,
        children: [{ path: ":id", element: <ClothesList /> }],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
