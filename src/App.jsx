import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MasterLayout from "./components/MasterLayout/MasterLayout";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import Cars from "./components/Cars/Cars";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "home/cars", element: <Cars /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
