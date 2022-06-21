import './App.css';
import '../src/stylesheets/Welcome.css';
import '../src/stylesheets/Login.css';
import '../src/stylesheets/Food.css'
import { Welcome } from './components/Welcome';
import { Login } from './components/Login';
import {Food} from './components/Food';

function App() {
  return (
    <div className="App">
    <div className="container-main">
    {/* <Welcome />
    <Login /> */}
    <Food />
    </div>
    </div>
  );
}

export default App;
