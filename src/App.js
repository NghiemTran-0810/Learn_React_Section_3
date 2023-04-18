import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';

// 
import React from 'react';
import List from './components/MyComponent';

class App extends React.Component {
  render() {
    return (
      <div>
        <List />
      </div>
    )
  }
}
export default App;
