import { Route, Routes } from "react-router-dom";
import { WaiterMainView } from './components/WaiterView/WaiterMainView';
import { Welcome } from './components/Welcome/Welcome';
import { Login } from './components/Login/Login';
import { AuthProvider } from './context/authContext';
import "./App.css";

function App() {
  return (
      <div className="App">
      <div className="container-main">
      <AuthProvider>
      <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/waiter" element={<WaiterMainView />} />
      </Routes>
      </AuthProvider>
      </div>
      </div>
  );
}

export default App;
