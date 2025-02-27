import Dashboard from "../pages/dashboard/Dashboard";
import Layout from "../common/Layout";
import Home from "../pages/home/Home";
import ActionCenter from "../pages/actionCenter/ActionCenter";
import TemplateHub from "../pages/templateHub/TemplateHub";
import Applications from "../pages/applications/Application";

const ProtectedRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "actioncenter", element: <ActionCenter /> },
      { path: "templatehub", element: <TemplateHub /> },
      { path: "templatehub", element: <TemplateHub /> },
      { path: "application", element: <Applications /> },
    ],
  },
];

export default ProtectedRoutes;
