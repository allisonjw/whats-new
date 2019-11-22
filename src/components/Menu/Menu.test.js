import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {
  let mockChangeNewsType = jest.fn();
  let wrapper = shallow(<Menu changeNewsType={mockChangeNewsType} />);

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the changeNewsType prop when clicked', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(mockChangeNewsType).toHaveBeenCalled();
  });

  it('should call the changeNewsType prop when clicked', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(mockChangeNewsType).toHaveBeenCalled();
  });

  it('should call the changeNewsType prop when clicked', () => {
    wrapper.find('button').at(2).simulate('click');
    expect(mockChangeNewsType).toHaveBeenCalled();
  });

  it('should call the changeNewsType prop when clicked', () => {
    wrapper.find('button').at(3).simulate('click');
    expect(mockChangeNewsType).toHaveBeenCalled();
  });

  it('should call the changeNewsType prop when clicked', () => {
    wrapper.find('button').at(4).simulate('click');
    expect(mockChangeNewsType).toHaveBeenCalled();
  });
});