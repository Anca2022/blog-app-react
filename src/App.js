import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'; 
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Authors from './components/Authors'; 
import Admin from './components/Admin';
import NotFound from './components/NotFound'; 
import Footer from './components/Footer'; 
import ScrollToTop from './components/ScrollToTop'; 

function App() {
  return (
    <div className="App">   
      <Navbar />   
      
      <div className='container'>
        <AnimatePresence wait>
          <Routes>
            <Route path='' element={<Homepage />}> </Route>
            <Route path='/authors' element={<Authors />}> </Route>
            <Route path='/admin' element={<Admin />}> </Route>
            <Route path='*' element={<NotFound />}> </Route>
          </Routes> 
        </AnimatePresence>
      
        <ScrollToTop />
      </div>
      
      <Footer />
      
    </div>
    );
}

export default App;
