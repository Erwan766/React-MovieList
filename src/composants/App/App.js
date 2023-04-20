import './App.css';
import { Routes, Route } from"react-router-dom";
import Films from '../Films/film';
import Info from '../Info/info';
import NavBar from '../navBar/navBar';

function App() {
  return (
      <div className="App">

      <NavBar/>

       <Routes>
          <Route path="/" element={<Films></Films>}/>
          <Route path="/info" element={<Info></Info>}/>
       </Routes>
      </div>
);
}

export default App;
