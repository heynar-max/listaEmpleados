import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './components/Index';
import Login from './components/Login';
import Nav from './components/Nav';
import Registro from './components/Registro';

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/registrar' element={<Registro/>}/>
        <Route path='/index' element={<Index/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
