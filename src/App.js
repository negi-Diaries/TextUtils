import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/textForm.js";
import React, { useState } from 'react'
import Alert from "./components/Alert";
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#033e4b";
      showAlert("Dark mode has been enabled! happy hacking...", "warning")
    } else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert("Lite mode has been enabled", "success")
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title="textUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
        <div className="container">
        <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} headings="TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} />}/>
        <Route exact path="about" element={<About mode={mode}/>}/>
        </Routes>
        </div>
      
    </BrowserRouter>
    </>
  );
}

export default App;
