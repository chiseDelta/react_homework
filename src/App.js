import {useReducer, useRef} from "react";

import css from './App.module.css'
import {Cats, Dogs} from "./components";


const reducer = (state, action) => {
    switch (action.type) {
        case 'CAT_CREATE':
            const [catElem] = state.cats.slice(-1);
            const catId = catElem ? catElem.catId + 1 : 0;
            return {...state, cats: [...state.cats, {catId, name: action.payload}]}
        case 'CAT_DELETE':
            const catIndex = state.cats.findIndex(cat => cat.catId === action.payload);
            state.cats.splice(catIndex, 1)
            return {...state}
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

const App = () => {
    const catInput = useRef()
    const dogInput = useRef()

    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []}, (data) => data);

    const catCreate = () => {
        dispatch({type: 'CAT_CREATE', payload:catInput.current.value})
        catInput.current.value = ''
    };

    const dogCreate = () => {
        dispatch({type: 'DOG_CREATE', payload:dogInput.current.value})
        dogInput.current.value = ''
    };

    return (
        <div className={css.App}>
            <div>
                <h1>Cats</h1>
                <input type="text" ref={catInput}/>
                <button onClick={catCreate}>Submit</button>
                <Cats cats={state.cats} dispatch={dispatch}/>
            </div>
            <div>
                <h1>Dogs</h1>
                <input type="text" ref={dogInput}/>
                <button onClick={dogCreate}>Submit</button>
                <Dogs dogs={state.dogs} dispatch={dispatch}/>
            </div>
        </div>
    );
}

export {App};