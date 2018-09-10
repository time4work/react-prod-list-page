import { combineReducers } from 'redux';
import colorFilter from './colorFilter';
import categoryFilter from './categoryFilter';
import productData from './productData';

const test = (state = [], payload) => {
    switch(payload.type) {
        case 'test':
            return payload.value;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    test,
    productData,
    categoryFilter,
    colorFilter
});

export default rootReducer;