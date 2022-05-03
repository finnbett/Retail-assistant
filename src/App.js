import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import GpCalc from './components/GpCalc';
import TillCalc from './components/TillCalc';
import Home from './components/Home';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gp-calc' element={<GpCalc />} />
        <Route path='/till-calc' element={<TillCalc />} />
      </Routes>
    </>
  )
}

export default App;
