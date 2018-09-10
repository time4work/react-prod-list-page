export function addColorToFilter(color) {
    return {
        type: 'PRODUCT_FILTER__ADD_COLOR',
        item: color
    };
}

export function removeColorFromFilter(color) {
    return {
        type: 'PRODUCT_FILTER__REMOVE_COLOR',
        item: color
    };
}

export function removeColorFilter(items) {
    return {
        type: 'PRODUCT_FILTER__REMOVE_COLOR_FILTER'
    };
}