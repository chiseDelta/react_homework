const catReducer = (state, action) => {
    switch (action.type) {
        case 'CAT_CREATE':
            const [catElem] = state.cats.slice(-1);
            const catId = catElem ? catElem.catId + 1 : 0;
            return {...state, cats: [...state.cats, {catId, name: action.payload}]}
        case 'CAT_DELETE':
            const catIndex = state.cats.findIndex(cat => cat.catId === action.payload);
            state.cats.splice(catIndex, 1)
            return {...state}
        default:
            return {...state}
    }
}

export {
    catReducer
}