export function addColorToFilter(color) {
    return (dispatch, getState) => {
        dispatch({
            type: 'PRODUCT_FILTER__ADD_COLOR',
            item: color
        });
        dispatch({
            type: 'PRODUCT__SELECTED_COLOR__SELECT',
            value: color
        });
    };
}

export function removeColorFromFilter(color) {
    return {
        type: 'PRODUCT_FILTER__REMOVE_COLOR',
        item: color
    };
}

export function removeColorFilter() {
    return (dispatch, getState) => {
        dispatch({
            type: 'PRODUCT_FILTER__REMOVE_COLOR_FILTER'
        });
        dispatch({
            type: 'PRODUCT__SELECTED_COLOR__REMOVE'
        });
    };
}