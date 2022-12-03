import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Homepage from './pages/HomePage';
import Searchcar from './pages/SearchCar';
import Cardetail from './pages/CarDetail';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/Carimobil' element={<Searchcar/>}/>
      <Route path='/Detailmobil/:id' element={<Cardetail/>}/>
    </Routes>
    
  );
}

export default App;
