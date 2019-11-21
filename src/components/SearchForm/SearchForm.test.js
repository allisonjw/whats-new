import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  let wrapper;
  const mockDisplayNewsSearch = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<SearchForm displayNewsSearch={mockDisplayNewsSearch} />)
  });

  // console.log(wrapper.debug());
  // remember to use this later
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when handleChange is called', () => {
    const mockEvent = { target: { name: 'input', value: 'NASA'} };
    const expected = 'NASA';
  
    wrapper.instance().handleChange(mockEvent);
  
    expect(wrapper.state('input')).toEqual(expected);
  });

  it('should run handleClick when the button is clicked', () => {
    wrapper.instance().handleClick = jest.fn();
    wrapper.instance().forceUpdate();
    const mockEvent = { preventDefault: jest.fn() };
  
    wrapper.find('button').simulate('click', mockEvent);
  
    expect(wrapper.instance().handleClick).toHaveBeenCalledWith(mockEvent);
  });

});