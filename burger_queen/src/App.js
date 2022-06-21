import './App.css';
import '../src/stylesheets/Welcome.css';
import '../src/stylesheets/Login.css';
import '../src/stylesheets/Food.css';
import {Routes, Route} from 'react-router-dom';
import { Welcome } from './components/Welcome';
import { Login } from './components/Login';
import {Food} from './components/Food';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path='/' element={<Login/>} />
        <Route path='/' element={<Food/>} />
    </Routes>
  );
}

export default App;
