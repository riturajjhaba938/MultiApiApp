import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PageTwo from './pages/PageTwo';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page-two" element={<PageTwo />} />
      </Routes>
    </>
  );
}

export default App;
