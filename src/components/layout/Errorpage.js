import { useRouteError } from "react-router-dom";
import MainNavigation from "./mainNavigation";
import PageContent from "./PageContent";

function ErrorPage() {
  const error = useRouteError();
  let title = "An Error Occured!";
  let message = "Something went wrong!";
  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 400) {
    title = "Not Found!";
    message = "Could not find resource or page.";
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
export default ErrorPage;
