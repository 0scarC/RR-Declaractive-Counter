//npx create-react-app "7.1.3-declarative-counter"
//creates folder with all these files
//Default code
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//           Or don't.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react'

function App() {
  var [counter , changeCounter] = useState(1)
  window.changeCounter = changeCounter
  return (
    <div>
      <h1>{counter}</h1>
      <h4>{counter}</h4>
    </div>
  )
}

export default App