import React from 'react';
import logo from './stanford.png';
import './App.css';

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ShoppingList name="Talal" />
      </header>
    </div>
  );
}

export default App;
