export function addCategoryToFilter(category) {
    return {
        type: 'PRODUCT_FILTER__ADD_CATEGORY',
        item: category
    };
}

export function removeCategoryFromFilter(category) {
    return {
        type: 'PRODUCT_FILTER__REMOVE_CATEGORY',
        item: category
    };
}

export function removeCategoryFilter(items) {
    return {
        type: 'PRODUCT_FILTER__REMOVE__CATEGORY_FILTER'
    };
}
