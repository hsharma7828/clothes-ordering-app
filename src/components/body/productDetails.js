import { Suspense } from "react";
import { Await, defer, json, useLoaderData } from "react-router-dom";
import ProductDescription from "../sub-components/productDescription";

function ProductsDetails() {
  const { product } = useLoaderData();
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={product}>
        {(loadedEvents) => <ProductDescription product={loadedEvents} />}
      </Await>
    </Suspense>
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
    product: await loadEvent(id),
    // products: loadEvents(),
  });
}
