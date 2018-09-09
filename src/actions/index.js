// import addCategory from './add-to-category-filter';
// import addColor from './add-to-color-filter';
// import removeCategory from './remove-from-category-filter';
// import removeColor from './remove-from-color-filter';
import store from '../store';

export default {
    "test": () => {
        store.dispatch({value: 'T E S T I N G', type: 'test'});
    }
    // "addToCategoryFilter": store.dispatch(addCategory),
    // "addToColorFilter": store.dispatch(addColor),
    // "removeFromCategoryFilter": store.dispatch(removeCategory),
    // "removeColor": store.dispatch(removeColor)
};