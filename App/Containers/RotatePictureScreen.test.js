import React from 'react';
import { shallow } from 'enzyme';
import RotatePictureScreen from './RotatePictureScreen';
import Button from '../Components/Button';

describe('RotatePictureScreen', () => {
  describe('Rendering', () => {
    let component;
    beforeEach(() => {
      component = shallow(<RotatePictureScreen />);
    });

    it('should be defined', () => {
      expect(RotatePictureScreen).toBeDefined();
    });

    it('should match to snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('should check form validation', () => {
      component.setState({ n: '' });
      alert = jest.fn();
      const instance = component.instance();
      jest.spyOn(instance, 'addMatrix');
      component
        .find(Button)
        .first()
        .props()
        .onPress();
      expect(alert).toBeCalled();
    });

    it('should generate n metrix', () => {
      component.setState({ n: '3' });
      const instance = component.instance();
      jest.spyOn(instance, 'addMatrix');
      component
        .find(Button)
        .first()
        .props()
        .onPress();
      expect(instance.state.nMatrix).toBe('3');
      expect(instance.state.matrix.length).toBe(3);
    });

    it('should rotate metrix', () => {
      component.setState({ n: '3' });
      const instance = component.instance();
      jest.spyOn(instance, 'addMatrix');
      component
        .find(Button)
        .first()
        .props()
        .onPress();
      jest.spyOn(instance, 'rotateImage');

      let generatedArray = instance.state.matrix;
      let firstIndexValue = generatedArray[0][0];
      component
        .find(Button)
        .last()
        .props()
        .onPress();
      let rotateArray = instance.state.matrix;
      let newIndexValue = rotateArray[0][2];

      expect(firstIndexValue).toBe(newIndexValue);
    });
  });
});
