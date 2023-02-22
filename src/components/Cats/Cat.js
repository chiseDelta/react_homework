const Cat = ({cat, dispatch}) => {
    const {catId, name} = cat;

    return (
        <div>
            <div>catId: {catId}</div>
            <div>name: {name}</div>
            <button onClick={()=>dispatch({type:'CAT_DELETE', payload:catId})}>Delete</button>
        </div>
    );
};

export {
    Cat
};