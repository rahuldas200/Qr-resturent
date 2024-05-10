import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import AOS from "aos";
import "aos/dist/aos.css";
import PrivateRoute from "./Components/auth/PrivateRoute";
import Profile from "./Components/Dashboard/profile/Profile";
import Dashboard from "./Components/Dashboard/Dashboard";
import Menu from "./Components/Dashboard/menuItem/Menu";
import Category from "./Components/Dashboard/category/Category";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            <div className="text-4xl h-screen w-screen text-center">404</div>
          }
        />
        <Route path="/" element={<Home />} />
        <Route
          element={
            <PrivateRoute>
              <Restaurant />
            </PrivateRoute>
          }
        > 
          <Route path="/restaurant/:userId/*" element={<Dashboard/>} />
          <Route path="/restaurant/:userId/dashboard" element={<Dashboard/>} />
          <Route path="/restaurant/:userId/profile" element={<Profile />} />
          <Route path="/restaurant/:userId/menu" element={<Menu/>}/>
          <Route path="/restaurant/:userId/category" element={<Category/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
