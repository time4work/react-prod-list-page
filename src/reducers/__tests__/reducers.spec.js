
import reducer from '../../reducers/categoryFilter';

describe('reducers', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, [])).toEqual([]);
    });

    it('should handle PRODUCT_FILTER__ADD_CATEGORY', () => {
        const categories = [
           'test1',
           'test2',
           'test3'
       ];
        const action = {
            type: "PRODUCT_FILTER__ADD_CATEGORY",
            item: 'test4'
        };
        expect(reducer(categories, action)).toEqual([
           'test1',
           'test2',
           'test3',
           'test4'
        ]);
    });

    it('should handle PRODUCT_FILTER__REMOVE_CATEGORY', () => {
       const categories = [
           'test1',
           'test2',
           'test3'
       ];
        const action = {
            type: "PRODUCT_FILTER__REMOVE_CATEGORY",
            item: 'test2'
        };
        expect(reducer(categories, action)).toEqual([
            'test1',
            'test3'
        ]);
    });

    it('should handle PRODUCT_FILTER__REMOVE__CATEGORY_FILTER', () => {
       const test_data = [
           'event1',
           'event2',
           'event3'
       ];
        const action = {
            type: "PRODUCT_FILTER__REMOVE__CATEGORY_FILTER"
        };
        expect(reducer([], action)).toEqual([]);
    });
});
