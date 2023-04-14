import './App.css';
import './Login.js';
import './Login.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
  <div className="app">
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </Router>
  </div>
  );
}
export default App;