import React from 'react';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
(Enzyme).configure({ adapter: new Adapter() });

import App from '../App';
import store from '../store';


describe(`<App />`, () => {
    it('renders component', () => {
        const component = Enzyme.shallow(<App  store={store} />);
        expect(component).toHaveLength(1);
    });
})
