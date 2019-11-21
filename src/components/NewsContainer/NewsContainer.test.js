import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer';

describe('NewsContainer', () => {
  it.skip('should match the snapshot', () => {
    const wrapper = shallow(<NewsContainer
      
    />);

    expect(wrapper).toMatchSnapshot();
  });
});