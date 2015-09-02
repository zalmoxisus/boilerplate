import React, { Component } from 'react';

export default class App extends Component {
  state = {name: this.props.name};

  // custom function
  sayHi = () => {
    this.setState({name: 'Mike'});
  };

  render () {
    return (
      <div>
        <div><p>Hello, {this.state.name}! :)</p></div>
        <div><input type="text" placeholder="Type a name here" onInput={(event) => this.setState({name:event.target.value})} /></div>
        <div><button onClick={this.sayHi}>Click me</button></div>
      </div>
    );
  };
}
