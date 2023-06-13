
import './App.css';
import SideBar from './components/SideBar/SideBar';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App"> 
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        
        <Route exact path='/login' element={<Login/>}></Route>
        
        <Route exact path='/register' element={<Register/>}></Route>
        
        <Route exact path='/Profile/:username' element={<Profile/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}
export default App;