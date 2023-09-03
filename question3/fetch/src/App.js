import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';

function App() {

  const [text, setText] = useState();

  // ORIGINAL CODE
  // useEffect( () =>{
  //   fetch(
  //     "http://localhost:3000"
  //   ).then( (res) => res.json() )
  //   .then( (r) => {
  //     console.log(r);
  //   } );

  // }, []);

  // WORKING SOLUTION
  // I have also added "proxy": "http://localhost:3000" in package.json
  useEffect(() =>{
    fetch(
      "/welcome"
    ).then(async (res) => {
      const object = await res.json()
      setText(object.message)
    })
    .then( (r) => {
      console.log(r);
    });

  }, []);

  return (
    <div className="App">
      
      message: {text}
    
    </div>
  );
}

export default App;
