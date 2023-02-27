import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SingleView from "./components/SingleView";
import { useState } from "react";
import { useEffect } from "react";
function App() {
  const [sView, setsView] = useState(true);
  console.log(window.location.href);
  useEffect(() => {
    if (window.location.href != "http://localhost:3000/") {
      setsView(false);
    }
  });
  return (
    <>
      <Navbar />
      {sView && <SingleView />}
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
