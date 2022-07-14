import { Route, Routes } from "react-router-dom";
import { Welcome } from './components/Welcome';
import { Login } from './components/Login';
import { Plates } from "./components/WaiterView/Plates";
import { AuthProvider } from './context/authContext';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className="App">
      <div className="container-main">
      <AuthProvider>
      <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/plates" element={<Plates />} />
      </Routes>
      </AuthProvider>
      </div>
      </div>
  );
}

export default App;
