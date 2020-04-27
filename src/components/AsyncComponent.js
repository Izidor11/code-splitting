import React, { Component } from 'react';

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null,
      };
    }
    //To be able to load page2, page3, bc promises.
    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({
        component: component,
      });
    }
    render() {
      const Component = this.state.component;
      //return component and all the props it has
      return Component ? <Component {...this.props} /> : null;
    }
  }
  return AsyncComponent;
}
