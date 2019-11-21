import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  it.skip('should match the snapshot', () => {
    const wrapper = shallow(<SearchForm
      
    />);

    expect(wrapper).toMatchSnapshot();
  });
});