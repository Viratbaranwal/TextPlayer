import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import Form from './Components/Form';
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";


function App() {
  const[alert, setAlert] = useState(null);

    const showAlert = (message,type)=>{
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(()=>{
          setAlert(null);
        }, 2000);
    }
 
  return (
    
    <>
    <Router>
    <Navbar title = "TextPlayer"/>
    <Alert alert={alert}/>
      <Routes>
          <Route exact path="/about" element={About}/>
          <Route exact path="/" element={<Form showAlert={showAlert}/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
