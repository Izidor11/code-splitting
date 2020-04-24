import React from 'react';
import logo from './logo.svg';
import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
    };
  }

  //arrow func, so we dont have to bind in constructor
  onRouteChange = (route) => {
    this.setSate({
      route: route,
    });
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
        <Page1 onRouteChange={this.onRouteChange} />
        <Page2 onRouteChange={this.onRouteChange} />
        <Page3 onRouteChange={this.onRouteChange} />
      </div>
    );
  }
}

export default App;
