import { createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Services from "./pages/Services";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/service/:id",
    element: <Services />,
  },
]);

export default router;
