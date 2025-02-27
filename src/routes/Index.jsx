import ProtectedRoutes from "./ProtectedRoutes";
import AuthRoutes from './AuthRoutes'

const allRoutes = [...ProtectedRoutes,...AuthRoutes];

export default allRoutes;
