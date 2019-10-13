import React from 'react';
import { shallow } from 'enzyme';
import Box from './Box';

describe('Box', () => {
  describe('Rendering', () => {
    it('should be defined', () => {
      expect(Box).toBeDefined();
    });
    it('should match to snapshot', () => {
      const component = shallow(<Box value={1} nMatrix={1} />);
      expect(component).toMatchSnapshot();
    });
  });
});
