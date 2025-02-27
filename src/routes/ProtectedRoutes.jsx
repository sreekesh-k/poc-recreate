import Dashboard from "../pages/dashboard/Dashboard";
import Layout from "../common/Layout";
import Home from "../pages/home/Home";
import ActionCenter from "../pages/actionCenter/ActionCenter";
import TemplateHub from "../pages/templateHub/TemplateHub";
import Applications from "../pages/applications/Application";
import Auth from "../hooks/Auth";


const ProtectedRoutes = [
  {
      path: "/",
      element: <Auth />,   
      children: [
          {
              path: "",
              element: <Layout />,   
              children: [
                  { path: "", element: <Home /> },
                  { path: "dashboard", element: <Dashboard /> },
                  { path: "actioncenter", element: <ActionCenter /> },
                  { path: "templatehub", element: <TemplateHub /> },
                  { path: "application", element: <Applications /> },
              ],
          },
      ],
  },
];


export default ProtectedRoutes;
