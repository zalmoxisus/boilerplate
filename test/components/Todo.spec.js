import expect from 'expect';
import jsdomReact from '../jsdomReact';
import React from 'react/addons';
import Todo from '../../src/components/Todo';

const { TestUtils } = React.addons;

function setup( editing = false ) {
  const props = {
    text: 'Use Redux', 
    completed: false,
    onClick: expect.createSpy()
  };

  const renderer = TestUtils.createRenderer();

  renderer.render(
    <Todo {...props} />
  );

  let output = renderer.getRenderOutput();

  return {
    props: props,
    output: output,
    renderer: renderer
  };
}

describe('components', () => {
  jsdomReact();

  describe('Todo', () => {
    it('initial render', () => {
      const { output } = setup();

      expect(output.type).toBe('li');
      expect(output.props.style).toEqual({ textDecoration: 'none', cursor: 'pointer' });
      expect(output.props.children).toEqual('Use Redux');
    });
  });
});
