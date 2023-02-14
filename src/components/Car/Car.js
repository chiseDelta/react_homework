import {carService} from "../../services";

const Car = ({car, setUpdateCar, setCars}) => {
    const {id, brand, price, year} = car;

    const deleteCar = async () => {
        await carService.deleteById(id)
        const {data} = await carService.getAll();
        setCars([...data])
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setUpdateCar(car)}>update</button>
            <button onClick={deleteCar}>delete</button>
        </div>
    );
};

export {Car};