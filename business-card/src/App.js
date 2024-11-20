import React from 'react';
import './App.css';
import Name from './Components/Name';
import Image from './Components/Image';
import Button from './Components/Button';
import './Components/About';
import About from './Components/About';
import Interest from './Components/Interest';
import Social from './Components/Social';










function App() {
  return (
    <div className="App">
       <Image />
      <Name />
      <Button />
      <About />
      <Interest />
      <Social />
     
    </div>
  );
}

export default App;
