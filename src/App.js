
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';


function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>


    </div>
  );
}

export default App;
