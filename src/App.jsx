import {
  // createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import DemoCard from "./shared/DemoCard";
import ImageCarousel from "./image-carousel/ImageCarousel";
import AccordionDemo from "./accordion/AccordionDemo";
import QuoteGenerator from "./quote-generator/QuoteGenerator";
import HomePage from "./HomePage";
import RootLayout from "./shared/RootLayout";
import ErrorPage from "./shared/ErrorPage";

function card(component, title) {
  return <DemoCard title={title}>{component}</DemoCard>;
}

// const router = createBrowserRouter([
const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: card(<HomePage />, "Home") },
      { path: "/drazen-demo/", element: card(<HomePage />, "Home") },
      {
        path: "/image-carousel",
        element: card(<ImageCarousel />, "Image Carousel"),
      },
      {
        path: "/accordion",
        element: card(<AccordionDemo />, "Accordion"),
      },
      {
        path: "/quote-generator",
        element: card(<QuoteGenerator />, "Quote Generator"),
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
