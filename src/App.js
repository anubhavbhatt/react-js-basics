import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import './styles.css';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
         
        </div>
      </BrowserRouter>     
  );
}

export default App;
