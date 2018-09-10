export function test() {
    return (dispatch, getState) => {
            setTimeout(() => {
                dispatch({
                    type: 'test',
                    value: 'T E S T I N G 3'
                });
            }, 1000);
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
    test,
    fetchProductData
};