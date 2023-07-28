import { Outlet } from "react-router-dom";
// import ProductNavigation from "./ProductNavigation";

function ProductsRoot() {
  return (
    <>
      {/* <ProductNavigation /> */}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default ProductsRoot;
