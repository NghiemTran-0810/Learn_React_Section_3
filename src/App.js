import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';

// 
import React from 'react';
// import Foo from './components/Foo';
// import StateExample from './components/State_example';
import Buttonclick from './components/Events';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Foo /> */}
        {/* <StateExample /> */}
        <Buttonclick />
      </div>
    )
  }
}



// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div className="App">

//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header> */}

//       {/* Components */}
//       <Foo />
//     </div>
//   );
// }

export default App;
