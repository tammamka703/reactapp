import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Subjects from './pages/Subjects';
import { Routes,Route } from 'react-router-dom';
function App() {

  return (
    <div className="app">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/subjects" element={<Subjects/>}/>
      </Routes>
    </div>
  );
}

export default App;
