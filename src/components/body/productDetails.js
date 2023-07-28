import { defer, json, useRouteLoaderData } from "react-router-dom";

function ProductsDetails() {
  const { product, products } = useRouteLoaderData("product-details");
  console.log(product, products);
  return (
    <>
      <h1>Welcome to Product Details</h1>
    </>
  );
}

export default ProductsDetails;

async function loadEvent(id) {
  const response = await fetch("https://fakestoreapi.com/products/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected product." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData;
  }
}
// async function loadEvents() {
//   const response = await fetch("https://fakestoreapi.com/products");

//   if (!response.ok) {
//     // return { isError: true, message: "Could not fetch events." };
//     // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
//     //   status: 500,
//     // });
//     return json({ message: "Could not fetch events." }, { status: 500 });
//   } else {
//     const resData = await response.json();
//     return resData;
//   }
// }

export async function loader({ request, params }) {
  const id = params.productId;
  return defer({
    event: await loadEvent(id),
    // events: loadEvents(),
  });
}
