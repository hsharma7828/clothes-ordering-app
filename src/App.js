import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./components/layout/root";
import Clothes from "./components/body/clothes";
import ClothesList from "./components/body/clothesList";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { path: "/clothes", element: <Clothes /> },
      { path: "/clothes/:id", element: <ClothesList /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
