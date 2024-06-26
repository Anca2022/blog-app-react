import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Authors from './components/Authors'; 
import Admin from './components/Admin';
import ArticleDetails from './components/ArticleDetails'; 
import NotFound from './components/NotFound'; 
import Footer from './components/Footer'; 
import ScrollToTop from './components/ScrollToTop'; 

function App() {
  return (
    <div className="App">      
      <div className='container'>
      <Navbar />
    
    <Routes>
      <Route path='' element={<Homepage />}> </Route>
      <Route path='/authors' element={<Authors />}> </Route>
      <Route path='/article-details/:id' element={<ArticleDetails />}> </Route>
      <Route path='/admin' element={<Admin />}> </Route>
      <Route path='*' element={<NotFound />}> </Route>
    </Routes> 
  
    <ScrollToTop />
      </div>
      
      <Footer />
      

    </div>
    );
}

export default App;
