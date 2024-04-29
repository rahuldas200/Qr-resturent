import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PrivateRoute from './Components/auth/PrivateRoute';
import Profile from './Components/Dashboard/Profile';
import Tables from './Components/Dashboard/Tables';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='*' element={<div className='text-4xl h-screen w-screen text-center'>404</div>} />
        <Route path="/" element={<Home />} />
        <Route
          element={
            <PrivateRoute>
              <Restaurant />
            </PrivateRoute>
          }
        >
           <Route path='/restaurant/:userId/dashboard' element={<Profile />} />
           <Route path='/restaurant/:userId/tables' element={<Tables />} />
        </Route>
       
      </Routes>
    </Router>
  );
}

export default App;

