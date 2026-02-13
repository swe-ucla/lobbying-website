import './App.css';
import Contact from './Contact';
import Home from './Home.js';
import Events from './Events.js';
import About from './About';
import BillDetail from './BillDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/bill/:id" element={<BillDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
