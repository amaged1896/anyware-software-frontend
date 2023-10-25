import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import Dashoboard from "./Pages/Dashoboard";
import Schedule from "./Pages/Schedule";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Dashoboard />,
        },
        {
          path: "/sc",
          element: <Schedule />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
