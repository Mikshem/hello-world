import React, { Component } from 'react';
import './css/Content.css';

class Content extends Component {
  constructor(){
    super();

    this.state = {
      count: 0
    };

    this.handleCountClick = this.handleCountClick.bind(this);
    this.handleResultadoClick = this.handleResultadoClick.bind(this);
    this.handleInoutChanged = this.handleInoutChanged.bind(this);
  }
componentDidMount(){
    this.setState({
      count: 1,
      number1: 0,
      number2: 0,
      result: 0
    });
  }

handleCountClick(e){
  if(e.target.id === 'add'){
    this.setState({
      count: this.state.count +1
    });
  }
  else if(e.target.id === 'subtraer' && this.state.count >0){
      this.setState({
        count: this.state.count -1
      });
    }else{
      this.setState({
        count: 0
      })
    }

}

handleResultadoClick(e){
  this.setState({
    result: this.state.number1 + this.state.number2
  })

}
handleInoutChanged(e){
  if(e.target.id === 'number1'){
    this.setState({
      number1: Number(e.target.value)
    });
  }else{
    this.setState({
      number2: Number(e.target.value)
    });
  }
}

  render() {
    return (
      <div className="Content">
        <h2>Counter: {this.state.count}</h2>
        <p>
          <button id="add" onClick={this.handleCountClick}>+</button>
          <button id="subtraer" onClick={this.handleCountClick}> -</button>
          <button id="reset" onClick={this.handleCountClick}>Reset</button>
        </p>

        <h2>Claculadora</h2>
        <p>
        <input type="number" id="number1" value={this.state.number1} onChange={this.handleInoutChanged} />
        +
        <input type="number" id="number2" value={this.state.number2} onChange={this.handleInoutChanged} />

        <button id="result" onClick={this.handleResultadoClick}> = </button>
          {this.state.result}
        </ p>
      </div>
    );
  }
}

export default Content;
