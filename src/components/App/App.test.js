import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should changeNewsType when a button is clicked based on the name', () => {
    const wrapper = shallow(<App />);
    const mockEvent = { target: { name: 'title', value: 'Jerry' } };
    const expected = 'Jerry';

    wrapper.instance().handleChange(mockEvent);
  });
});
