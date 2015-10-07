import React from 'react';
import expect from 'expect'
import Test from 'legit-tests'
//import { Find } from 'legit-tests/lib/middleware'
import Hello from '../../src/components/Hello'

describe('Hello component', () => {
  it('should render (test with shallow)', () => {
    Test(<Hello/>, {shallow: true})
      .test((el) => {
        expect(el.instance.type).toBe('div');
      });
  });

  it('should render (test without shallow)', () => {
    Test(<Hello />)
      .find('h1')
      .test(({h1}) => {
        expect(h1).toExist();
      });
  });

  it('should render (to string)', () => {
    Test(<Hello />)
      .renderToString(string => {
        expect(string).toMatch(/Hello, world!/)
      })
  });

  it('should have padding style', () => {
    Test(<Hello />)
      .find('h1')
      .test(({h1}) => {
        expect(h1.props.style).toEqual({padding: '1.5em'});
      });
  });

  it('should be red on click', () => {
    Test(<Hello />)
      .find('h1')
      .simulate({method: 'click', element: 'h1'})
      .test(({h1}) => {
        expect(h1.getDOMNode().style.color).toBe('red');
      });
  });

  /*it('should be red on click (using Find middleware)', () => {
    Test(<Hello/>)
      .use(Find, 'h1')
      .simulate({method: 'click', element: 'h1'})
      .test(({helpers}) => {
        expect(helpers.elements.h1.getDOMNode().style.color).toBe('red');
      });
  });*/
});
