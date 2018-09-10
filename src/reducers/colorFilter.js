export const colorFilter = (state = [], payload) => {
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


export const selectedColor = (state = '', payload) => {
    switch(payload.type) {
        case 'PRODUCT__SELECTED_COLOR__SELECT':
            return payload.value;

        case 'PRODUCT__SELECTED_COLOR__REMOVE':
            return '';

        default:
            return state;
    }
}