import Layout from "./common/Layout";
import Home from "./pages/home/Home";
import { Provider } from "react-redux";
import store from "./common/redux/store/CommonStore";
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
            <Route path="/actioncenter" element={<Home />} />
            <Route path="/templatehub" element={<Home />} />
            <Route path="/application" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
