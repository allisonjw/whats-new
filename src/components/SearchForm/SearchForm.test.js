import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  let wrapper;
  const mockDisplayNewsSearch = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<SearchForm displayNewsSearch={mockDisplayNewsSearch} />)
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});