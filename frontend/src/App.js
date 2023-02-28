import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SingleView from "./components/SingleView";

function App() {
  return (
    <>
      {/* <SingleView /> */}
      {/* {sView && <SingleView />} */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<SingleView />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
