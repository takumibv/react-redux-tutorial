import React, { Component, PropTypes } from 'react';
import VisibleTodoList from '../containers/VisibleTodoList'
import TodoList from '../components/TodoList'
import GameBoard from './GameBoard'
import Header from '../components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <h1 className="App-title">Welcome toasdfa React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TodoList />
        <GameBoard /> */}
        <Header />
        <GameBoard />
      </div>
    );
  }
}

export default App;
