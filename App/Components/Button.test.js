import React from 'react';
import { shallow } from 'enzyme';
import { TouchableOpacity, Text } from 'react-native';

import Button from './Button';

describe('Button', () => {
  describe('Rendering', () => {
    let component;
    const mockFn = jest.fn();

    beforeEach(() => {
      component = shallow(<Button name="test" onPress={mockFn} />);
    });

    it('should be defined', () => {
      expect(Button).toBeDefined();
    });

    it('should match to snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('should match button text', () => {
      expect(component.find(Text).props('children').children).toEqual('test');
    });

    it('should click button', () => {
      component.find(TouchableOpacity).simulate('press');
      expect(mockFn).toHaveBeenCalled();
    });
  });
});
