import { useEffect } from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard/:userid' element={<Dashboard/>}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
