import React from 'react';
import { Provider } from 'react-redux';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
(Enzyme).configure({ adapter: new Adapter() });

import store from '../../store';
import ProdMenu from '../ProdMenu';

const component = Enzyme.shallow(<ProdMenu store={store} />);

describe(`<ProdMenu />`, () => {
    it('should be defined', () => {
      expect(ProdMenu).toBeDefined();
    });

    it('describe render', () => {
      expect(component).toHaveLength(1);
    });

  it('should match the snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});