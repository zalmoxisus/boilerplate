import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { AppCanvas, AppBar } from 'material-ui';
import expect from 'expect'
import Test from 'legit-tests'
import { Find, SetState } from 'legit-tests/lib/middleware'
import ThemeManager from '../../src/themes/ThemeManager.js';
import LeftNav from '../../src/components/LeftNav'
import { toggleLeftNav } from '../../src/actions/leftNav';
import reducer from '../../src/reducers';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    const { pushState, leftNavToggled, toggleLeftNav } = this.props;
    return (
      <AppCanvas>
        <AppBar
          title="Title"
          onLeftIconButtonTouchTap={toggleLeftNav} />
        <LeftNav toggled={leftNavToggled} pushState={pushState} />
      </AppCanvas>
    );
  }
}

App.childContextTypes = {
  muiTheme : React.PropTypes.object
};

const store = createStore(reducer);

function mapStateToProps(state) {
  return {
    leftNavToggled: state.leftNav.toggled
  };
}

const Root = connect(
  mapStateToProps,
  {toggleLeftNav}
)(App);

describe('LeftNav component', () => {
  it('should render', () => {
    Test(<Provider store={store}>{ () => <Root /> }</Provider>)
      .find('div').find('span').find('button').find('h1')
      .test(({div,span,button,h1}) => {
        expect(div).toExist();
        expect(span).toExist();
        expect(button).toExist();
        expect(h1).toExist();
      });
  });

  it('should toggle', () => {
    Test(<Provider store={store}>{ () => <Root /> }</Provider>)
      .find('button')
      .simulate({method: 'touchTap', element: 'button'})
      .find('div')
      .test(({div}) => {
        let toggled = false;
        div.forEach( obj => {
          if(obj.getDOMNode().style.transform){
            //console.log(obj.getDOMNode().style.transform);
            if (obj.getDOMNode().style.transform === 'translate3d(0px, 0, 0)') toggled = true;
          }
        });
        expect(toggled).toBe(true);
      });
  });
  
});
