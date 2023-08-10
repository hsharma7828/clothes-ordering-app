import { Suspense } from "react";
import { Await, defer, json, useRouteLoaderData } from "react-router-dom";
import TopRated from "../body/topRated";

function Home() {
  const { events } = useRouteLoaderData("home");
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <TopRated products={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default Home;

async function loadEvents() {
  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events." };
    // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    //   status: 500,
    // });
    return json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    const resData = await response.json();
    let avaialbeCategories = [];
    resData.forEach((element) => {
      if (!avaialbeCategories.includes(element.category)) {
        avaialbeCategories.push(element.category);
      }
    });
    return [resData, avaialbeCategories.sort()];
  }
}

export function loader() {
  return defer({
    events: loadEvents(),
  });
}
