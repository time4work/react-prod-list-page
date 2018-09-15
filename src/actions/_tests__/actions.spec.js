import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../../actions/categories'

const middlewares = [
    thunk
];
const mockStore = configureStore(middlewares);
const store = mockStore({});

describe(`actions`, () => {

    it('should create an action to remove Category-Filter', () => {
        const expectedAction = {
            type: "PRODUCT_FILTER__REMOVE__CATEGORY_FILTER"
        }
        expect(actions.removeCategoryFilter()).toEqual(expectedAction);
    });

    it('should create an action to add category to Filter', () => {
        const category = 'test';
        const expectedAction = {
            type: "PRODUCT_FILTER__ADD_CATEGORY",
            item: category
        }
        expect(actions.addCategoryToFilter(category)).toEqual(expectedAction);
    });

    it('should create an action to remove category from Filter', () => {
        const category = 'test';
        const expectedAction = {
            type: "PRODUCT_FILTER__REMOVE_CATEGORY",
            item: category
        }
        expect(actions.removeCategoryFromFilter(category)).toEqual(expectedAction);
    });

});