import React from 'react';
import { Provider } from 'react-redux';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
(Enzyme).configure({ adapter: new Adapter() });

import store from '../../store';
import ColorFilter from '../ColorFilter';

const items = [];
const component = Enzyme.shallow(<ColorFilter store={store} items={items}/>);

describe(`<ColorFilter />`, () => {
    it('should be defined', () => {
      expect(ColorFilter).toBeDefined();
    });

    it('describe render', () => {
      expect(component).toHaveLength(1);
    });

  it('should match the snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});