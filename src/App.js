import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar.component";
import Dashboard from "./pages/dashboard/dashboard.pages";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main">
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
