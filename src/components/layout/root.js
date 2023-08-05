import { Outlet } from "react-router-dom";
import MainNavigation from "./mainNavigation";
import CartProvider from "../../store/CartProvider";

function RootPage() {
  return (
    <>
      <CartProvider>
        <MainNavigation />
        <main>
          {/* {navigation.state === "loading" && <p>Loading....</p>} */}
          <Outlet />
        </main>
      </CartProvider>
    </>
  );
}

export default RootPage;
