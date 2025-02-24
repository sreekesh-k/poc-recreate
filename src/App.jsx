import Layout from "./common/Layout";
import Home from "./pages/home/Home";
import { Provider } from "react-redux";
import store from "./common/redux/store/CommonStore";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </Layout>
      </Provider>
    </>
  );
}

export default App;
