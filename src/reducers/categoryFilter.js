export default (state = [], payload) => {
    switch(payload.type) {
        case 'PRODUCT_FILTER__ADD_CATEGORY':
            const result = [...state, payload.item];
            // filter dublicats
            return result.filter(function(item, index) {
                return result.indexOf(item) === index;
            });

        case 'PRODUCT_FILTER__REMOVE_CATEGORY':
            return state.filter(item => item !== payload.item);

        case 'PRODUCT_FILTER__REMOVE__CATEGORY_FILTER':
            return [];

        default:
            return state;
    }
};