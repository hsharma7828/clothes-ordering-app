import { Outlet } from "react-router-dom";
import MainNavigation from "./mainNavigation";

function RootPage() {
  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" && <p>Loading....</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootPage;
