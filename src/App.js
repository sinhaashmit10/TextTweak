import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
function App() {
  const [mode, setMode] = useState('light')
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }

  }
  return (
    <>
     <Navbar title = "GRAPHY" aboutText = "About GRAPHY" mode = {mode} toggleMode={toggleMode}/>
     <div className="container my-3">
      <TextForm heading = "Enter the text to analyze" mode = {mode}/>
     </div>
     
    </>
  );
}

export default App;
