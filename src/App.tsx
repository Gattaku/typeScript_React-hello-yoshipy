import React, { useState } from 'react';
import Hello from "./compornents/Hello"

function App() {
  const text = {
    a:1,
    b:2,
    message: "I am Peter",
  }
  const [isAuth, setIsAuth] = useState(true);

  return (
    <div className="App">
      <Hello text= {text} isAuth={isAuth}></Hello>
    </div>
  );
}

export default App;
