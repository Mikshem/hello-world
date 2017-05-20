import React, { Component } from 'react';

// COMPONENTS
import Header from './global/Header';
import Content from './global/Content';
import Footer from './global/Footer';

// DATA
import items from '../data/menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="TS7 scs" items={items} />
        <Content />
        <Footer copyright="&copy; TS7 scs"/>
      </div>
    );
  }
}

export default App;
