import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import EmailVerification from "./components/EmailVerified";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
          path="/verify/:token"
          element={<EmailVerification/>}
          loader={({ params }) =>
            fetch(`http://localhost:5000/verify/${params.token}`).then(response =>
              response.json()
            )
          }
        />
          <Route path="/registration" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
