const Simpson = ({simpson}) => {
    const {name, surname, gender, age, image} = simpson
    return (
        <div>
            <div>Name: {name}</div>
            <div>Surname: {surname}</div>
            <div>Gender: {gender}</div>
            <div>Age: {age}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Simpson};