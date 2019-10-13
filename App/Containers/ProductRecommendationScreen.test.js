import React from 'react';
import { shallow, mount } from 'enzyme';
import ProductRecommendationScreen from './ProductRecommendationScreen';
import Button from '../Components/Button';

describe('ProductRecommendationScreen', () => {
  describe('Rendering', () => {
    let component;

    beforeEach(() => {
      component = shallow(<ProductRecommendationScreen />);
    });

    it('should be defined', () => {
      expect(ProductRecommendationScreen).toBeDefined();
    });

    it('should match to snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('should check form validation', () => {
      component.setState({ age: '', isStudent: '', income: '' });
      alert = jest.fn();
      const instance = component.instance();
      instance.updateFormValue('isStudent', 'No');
      instance.updateFormValue('income', '10000');
      component
        .find(Button)
        .first()
        .props()
        .onPress();
      expect(alert).toBeCalled();
    });

    it('should generate bundle output', () => {
      const instance = component.instance();
      instance.updateFormValue('age', '22');
      instance.updateFormValue('isStudent', 'No');
      instance.updateFormValue('income', '20000');
      jest.spyOn(instance, 'submit');

      component
        .find(Button)
        .first()
        .props()
        .onPress();
      expect(instance.state.bundle.value).toBe(2);
    });
  });
});
