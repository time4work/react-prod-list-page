import { combineReducers } from 'redux';

import color from './color';
import category from './category';

const testReducer = (state = [], payload) => {
    switch(payload.type) {
        case 'test':
            return [...state, payload.value];
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    testReducer,
    category,
    color
});

export default rootReducer;