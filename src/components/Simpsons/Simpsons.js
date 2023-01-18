import {Simpson} from "../Simpson/Simpson";

const Simpsons = () => {
    const simpsons = [
        {
            id: 1,
            name: 'Homer',
            surname: 'Simpson',
            gender: 'Male',
            age: 35,
            image: 'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png'
        },
        {
            id: 2,
            name: 'Marge',
            surname: 'Simpson',
            gender: 'Female',
            age: 34,
            image: 'https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png'
        },
        {
            id: 3,
            name: 'Bart',
            surname: 'Simpson',
            gender: 'Male',
            age: 10,
            image: 'https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png'
        },
        {
            id: 4,
            name: 'Lisa',
            surname: 'Simpson',
            gender: 'Female',
            age: 8,
            image: 'https://static.wikia.nocookie.net/simpsons/images/5/57/Lisa_Simpson2.png'
        },
        {
            id: 5,
            name: 'Maggie',
            surname: 'Simpson',
            gender: 'Female',
            age: 1,
            image: 'https://static.wikia.nocookie.net/simpsons/images/9/9d/Maggie_Simpson.png'
        }
    ]
    return (
        <div>
            {
                simpsons.map(simpson => <Simpson key={simpson.id} simpson={simpson}/>)
            }
        </div>
    );
};

export {Simpsons};