import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Friends from './components/Friends/Friends';
function App() {
  return (
    <div className="App mt-4">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/friends" element={<Friends></Friends>} />
        <Route path="about" element={<About></About>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
