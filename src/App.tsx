import { createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Services from "./pages/Services";
import Treatments from "./pages/Treatments";
import ConditionDetail from "./pages/ConditionDetail";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/service/:id",
    element: <Services />,
  },
  {
    path: "/treatment/:id",
    element: <Treatments />,
  },
  {
    path: "/condition/:id",
    element: <ConditionDetail />,
  },
]);

export default router;
