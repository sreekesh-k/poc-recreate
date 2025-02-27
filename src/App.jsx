import Layout from "./common/Layout";
import Home from "./pages/home/Home";
import ActionCenter from "./pages/actionCenter/ActionCenter";
import TemplateHub from "./pages/templateHub/TemplateHub";
import Applications from "./pages/applications/Application";
import { Provider } from "react-redux";
import store from "./redux/Store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/actioncenter" element={<ActionCenter />} />
            <Route path="/templatehub" element={<TemplateHub />} />
            <Route path="/application" element={<Applications />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
