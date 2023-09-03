import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';

function App() {

  const [text, setText] = useState();

  useEffect( () =>{
    fetch(
      "http://localhost:3000"
    ).then( (res) => res.json() )
    .then( (r) => {
      console.log(r);
    } );

  }, []);

  return (
    <div className="App">
      
      message: {text}
    
    </div>
  );
}

export default App;
