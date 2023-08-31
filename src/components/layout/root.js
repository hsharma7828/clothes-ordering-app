import { Outlet, useNavigate, useRouteLoaderData } from "react-router-dom";
import MainNavigation from "./mainNavigation";
import CartProvider from "../../store/CartProvider";
import { getTokenDuration } from "../../utils/Auth";
import { useEffect } from "react";

function RootPage() {
  const token = useRouteLoaderData("home");
  const navigate = useNavigate();
  const url = document.location.pathname;

  useEffect(() => {
    function checkAuthLoader(token, navigate) {
      if (!token?.token || url === "/products") {
        navigate("/products");
        return;
      }
      if (token?.token === "EXPIRED" || url === "/auth") {
        navigate("/auth");
      } else {
        const tokenDuration = getTokenDuration();
        console.log(tokenDuration);
        navigate("/home");
      }
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
