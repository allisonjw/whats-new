import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  let wrapper;
  let mockDisplayNewsSearch = jest.fn();

  beforeEach(() => {
    mockDisplayNewsSearch = jest.fn();
    wrapper = shallow(<SearchForm displayNewsSearch={mockDisplayNewsSearch} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when handleChange is called', () => {
    const mockEvent = { target: { name: 'input', value: 'NASA' } };
    const expected = 'NASA';

    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('input')).toEqual(expected);
  });

  it('should reset state after form is cleared', () => {
    const startState = { input: 'NASA' };
    const expected = { input: '' };

    wrapper.state(startState);
    expect(wrapper.instance().resetInput);
    wrapper.state(expected);
  });

  it('should run handleClick when the button is clicked', () => {
    wrapper.instance().handleClick = jest.fn();
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.find('button').simulate('click', mockEvent);
    wrapper.instance().resetInput = jest.fn();
    expect(wrapper.instance().handleClick).toHaveBeenCalledWith(mockEvent);
  });
});
