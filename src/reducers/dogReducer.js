const dogReducer = (state, action) => {
    switch (action.type) {
        case 'DOG_CREATE':
            const [dogElem] = state.dogs.slice(-1);
            const dogId = dogElem ? dogElem.dogId + 1 : 0;
            return {...state, dogs: [...state.dogs, {dogId, name: action.payload}]}
        case 'DOG_DELETE':
            const dogIndex = state.dogs.findIndex(dog => dog.dogId === action.payload);
            state.dogs.splice(dogIndex, 1)
            return {...state}
        default:
            return {...state}
    }
}

export {
    dogReducer
}