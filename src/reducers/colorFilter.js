export default (state = [], payload) => {
    switch(payload.type) {
        case 'PRODUCT_FILTER__ADD_COLOR':
            const result = [...state, payload.item];
            return result.filter(function(item, index) {
                return result.indexOf(item) === index;
            });

        case 'PRODUCT_FILTER__REMOVE_COLOR':
            return state.filter(item => item !== payload.item);

        case 'PRODUCT_FILTER__REMOVE_COLOR_FILTER':
            return [];

        default:
            return state;
    }
};