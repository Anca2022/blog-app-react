import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Authors from './components/Authors'; 
import ArticleDetails from './components/ArticleDetails'; 
import NotFound from './components/NotFound'; 
import Footer from './components/Footer'; 
import ScrollToTop from './components/ScrollToTop'; 

function App() {
  return (
    <div className="App">      
      <Navbar />
    
      <Routes>
        <Route path='' element={<Homepage />}> </Route>
        <Route path='/authors' element={<Authors />}> </Route>
        <Route path='/article-details/:id' element={<ArticleDetails />}> </Route>
        <Route path='*' element={<NotFound />}> </Route>
      </Routes> 
    
      <Footer />
      <ScrollToTop />

    </div>
    );
}

export default App;
