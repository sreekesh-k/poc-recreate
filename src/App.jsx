import { Provider } from "react-redux";
import store from "./redux/store.js";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppRouter />
      </Router>
    </Provider>
  );
}

export default App;
