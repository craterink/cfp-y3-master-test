import React from 'react';
import logo from './stanford.png';
import './App.css';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xo : this.props.val,
    };
  }
  
  handleClick() {
  	if (this.state.xo == 'X') {
  		this.setState({xo:'O'});
    } else if (this.state.xo == 'O') {
    	this.setState({xo:''});
    } else {
    	this.setState({xo:'X'})
    }
  }
  
  render() {
    return (
      <button className="square" onClick={() => this.handleClick()}>
        {this.state.xo}
      </button>
    );
  }
}

class Board extends React.Component {
  
  renderSquare(i) {
    return <Square val=""/>;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board player='X'/>
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Game />
      </header>
    </div>
  );
}

export default App;
