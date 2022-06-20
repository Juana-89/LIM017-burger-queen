import './App.css';
import '../src/stylesheets/Welcome.css';
import '../src/stylesheets/Login.css';
import { Welcome } from './components/Welcome';
//import { Login } from './components/Login';

function App() {
  return (
    <div className="App">
    <div className="container-main">
    <Welcome />
    {/* <Login /> */}
    </div>
    </div>
  );
}

export default App;
