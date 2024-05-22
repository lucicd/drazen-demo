import { useRouteError } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import DemoCard from "./DemoCard";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <MainNavigation />
      <DemoCard title="Error">
        <div>
          <h1>An error occurred!</h1>
          <p>404: Could not find this page.</p>
        </div>
      </DemoCard>
    </>
  );
}
