export function removeFilter() {
    return (dispatch, getState) => {
        dispatch({
            type: 'PRODUCT_FILTER__REMOVE_COLOR_FILTER'
        });
        dispatch({
            type: 'PRODUCT__SELECTED_COLOR__REMOVE'
        });
        dispatch({
            type: 'PRODUCT_FILTER__REMOVE__CATEGORY_FILTER'
        });
    };
};
export function fetchProductData() {
    return (dispatch, getState) => {
        dispatch({
            type: 'PRODUCT_DATA__FETCH',
        })
    }
}

export default {
    removeFilter,
    fetchProductData
};