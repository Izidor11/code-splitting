import React from 'react';
import './App.css';
import Page1 from './components/Page1';
//import AsyncComponent from './components/AsyncComponent';
import { Suspense } from 'react';

const Page2Lazy = React.lazy(() => import('./components/Page2'));
const Page3Lazy = React.lazy(() => import('./components/Page3'));

//components are object so.. null
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
      component: null,
    };
  }

  //arrow func, so we dont have to bind in constructor
  onRouteChange = (route) => {
    this.setState({
      route: route,
    });
  };
  /*
    //With Code splitting
    if (route === 'page1') {
      this.setState({ route: route });
    } else if (route === 'page2') {
      import('./components/Page2').then((Page2) => {
        console.log(Page2);
        this.setState({ route: route, component: Page2.default });
      });
    } else if (route === 'page3') {
      import('./components/Page3').then((Page3) => {
        this.setState({ route: route, component: Page3.default });
      });
    }
  };
  */

  render() {
    if (this.state.route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange} />;
    } else if (this.state.route === 'page2') {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Page2Lazy onRouteChange={this.onRouteChange} />;
        </Suspense>
      );
    } else if (this.state.route === 'page3') {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Page3Lazy onRouteChange={this.onRouteChange} />;
        </Suspense>
      );
    }
  }
}

export default App;
