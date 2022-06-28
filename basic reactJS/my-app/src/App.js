// import needed libs
// import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import React from 'react';
import Yeah from './components/yeah'
import MarriedWith from './components/marriedWith'

const Greetings = () => 
{
  return <h1>Yuhu</h1>;
}

const App = () => 
{
  return(
    <div className='App'>
      <h1>Hello World</h1>
      <Greetings />
      {/* <Hello name="Yuhu" age={120}/>
      <Hello name="Njir" age={500}/> */}
      <Hello>
        <h1>Hello World. This is years old</h1>
        <p>Yuhu is here</p>
      </Hello>
      <Yeah name="Darell" />
      <MarriedWith name="Nely" />
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <Hello name = "Deil" age = {20}/>
//         <Hello name = "Yuhu" age = {16}/>
//       </header>
//     </div>
//   );
// }

// export app
export default App;
