import { useRoutes } from "react-router-dom";
import allRoutes from "./Index";

const AppRouter = () => {
  const element = useRoutes(allRoutes);
  return element;
};

export default AppRouter;
