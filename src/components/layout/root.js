import { Outlet, useNavigate, useRouteLoaderData } from "react-router-dom";
import MainNavigation from "./mainNavigation";
import CartProvider from "../../store/CartProvider";
import { getTokenDuration } from "../../utils/Auth";
import { useEffect } from "react";

function RootPage() {
  const token = useRouteLoaderData("home");
  const navigate = useNavigate();

  useEffect(() => {
    function checkAuthLoader(token, navigate) {
      if (!token) {
        return;
      }
      if (token === "EXPIRED") {
        navigate("/products");
      }
      const tokenDuration = getTokenDuration();
      console.log(tokenDuration);
      navigate("/home");
    }
    checkAuthLoader(token, navigate);
  }, []);
  return (
    <>
      <CartProvider>
        <MainNavigation />
        <main>
          <Outlet />
        </main>
      </CartProvider>
    </>
  );
}

export default RootPage;
