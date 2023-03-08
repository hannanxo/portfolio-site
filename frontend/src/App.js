import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
// import Dashboard from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./pages/Main";
import Blog from "./pages/Blog";
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector(state => state.auth);
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blogs" element={<Blog />} />
          {/* {user ? <Route path="/blogs" element={<Blog />} /> : <Route path="/" element={<Main />} />} */}

          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
