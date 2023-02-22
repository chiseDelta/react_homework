const Dog = ({dog, dispatch}) => {
    const {dogId, name} = dog;

    return (
        <div>
            <div>dogId: {dogId}</div>
            <div>name: {name}</div>
            <button onClick={()=>dispatch({type:'DOG_DELETE', payload:dogId})}>Delete</button>
        </div>
    );
};

export {
    Dog
};