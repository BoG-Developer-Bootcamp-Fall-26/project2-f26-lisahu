import './App.css'
import About from './pages/About';
import Home from './pages/Home';
import LinesPage from './pages/LinesPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lines" element={<LinesPage />} />
      </Routes>
    </Router>
  )
}

export default App