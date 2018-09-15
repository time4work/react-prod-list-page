import React from 'react';
import { Provider } from 'react-redux';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
(Enzyme).configure({ adapter: new Adapter() });

import store from '../../store';
import CategoryFilter from '../CategoryFilter';

const items = [];
const component = Enzyme.shallow(<CategoryFilter store={store} items={items}/>);

describe(`<CategoryFilter />`, () => {
    it('should be defined', () => {
      expect(CategoryFilter).toBeDefined();
    });

    it('describe render', () => {
      expect(component).toHaveLength(1);
    });

  it('should match the snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
