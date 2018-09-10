import data from "../prod-data.json";

export default (state = [], payload) => {
    switch(payload.type) {
        case 'PRODUCT_DATA__FETCH':
            return data;

        default:
            return state;
    }
};