import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <>
          <Navbar />
          <Routes>
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
