import { Suspense } from "react";
import { Await, useRouteLoaderData } from "react-router-dom";
import ClothesList from "./clothesList";

function Clothes() {
  const { events } = useRouteLoaderData("home");
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <ClothesList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default Clothes;
