export default (state = [], payload) => {
    switch(payload.type) {
        case 'add':
            return [...state, payload.value];
        case 'remove':
            let index = state.indexOf(payload.value);
            if (index > -1) {
                return state.splice(index, 1);
            } else {
                return state;
            }
        default:
            return state;
    }
};