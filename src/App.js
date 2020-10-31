import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar.component";
import Dashboard from "./pages/dashboard/dashboard.pages";
import ReportsPage from "./pages/reports";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main">
          <Switch>
            <Route exact path="/reports">
              <ReportsPage />
            </Route>
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
