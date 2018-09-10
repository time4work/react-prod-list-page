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

            // categories.push({
            //     value: item.category.toLowerCase()
            // });
            // item.states.forEach(itemState => {
            //     colors.push({
            //         value: itemState.label.toLowerCase()
            //     });
            // })
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