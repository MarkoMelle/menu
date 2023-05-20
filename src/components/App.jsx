import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import DriftPage from './DriftPage';
import ForzaPage from './ForzaPage';
import TimeAttackPage from './TimeAttackPage';
import Menu from './Menu';

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className='page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/drift' element={<DriftPage />} />
            <Route path='/timeattack' element={<TimeAttackPage />} />
            <Route path='/forza' element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
