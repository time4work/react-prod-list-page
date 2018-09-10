export const performFilterDate = data => {
    let colors = [];
    let categories = [];

    if(data && data.length > 0) {
        // parse the product-data file
        data.forEach(item => {
            categories.push(item.category.toLowerCase());
            item.states.forEach(itemState => {
                colors.push(itemState.label.toLowerCase());
            })
        });
        // remove duplicate 
        colors = colors.filter(function(item, index) {
            return colors.indexOf(item) === index;
        });
        categories = categories.filter(function(item, index) {
            return categories.indexOf(item) === index;
        });
    }
    return { categories, colors };
}


export const productDataFilter = (products = [], categoryFilter = [], colorFilter = []) => {
    console.log({products, categoryFilter, colorFilter});
    return products
        .filter(item => { // filter product with categoryFilter 
            if (categoryFilter.length === 0)
                return true;
            if (categoryFilter.indexOf(item.category) !== -1)
                return true;
            else return false;
        })
        .filter(item => { // filter product with colorFilter
            if (colorFilter.length === 0)
                return true;
            for (let i=0; i<item.states.length; i++) {
                if (colorFilter.indexOf(item.states[i].label) !== -1)
                    return true;
            }
            return false;
        });
}