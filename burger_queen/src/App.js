import React from 'react';
import './App.css';
import '../src/stylesheets/Welcome.css';
import '../src/stylesheets/Login.css';
import '../src/stylesheets/Food.css'
import '../src/stylesheets/Breakfast.css';
import '../src/stylesheets/Launch.css';
import { Welcome } from './components/Welcome';
import { Login } from './components/Login';
import { Food } from './components/Food';
import { Plates } from './components/Plates';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/authContext';

function App() {
  const desayuno =()=>{
    console.log('aqui se muestra el desayuno');
  }
  const almuerzo=()=>{
    console.log('aqui se muestra el almuerzo');
  }
  return (
    <div className="App">
    <div className="container-main">
    <AuthProvider>
    <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/login" element={<Login/>}/>
      {/* <Route path="/food" element={<Food/>}/> */}
      <Route path="/plates" element={<Plates props='breakfast'/>}/>
      {/* <Route path="/plates" element={<Plates props='lunch'/>}/> */}
        <Food
        text= 'Breakfast'
        click={true}
        showView={desayuno} />
        <Food
        text='Lunch'
        click={false}
        showView={almuerzo}/>
    </Routes>
    </AuthProvider>
    </div>
    </div>
  );
}


export default App;
