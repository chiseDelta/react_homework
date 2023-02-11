import {useEffect, useState} from "react";

import {carService} from "./services";
import {CarForm} from "./components";
import {Cars} from "./components";


const App = () => {
    const [cars, setCars] = useState([]);
    const [updateCar, setUpdateCar] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars([...data]))
    }, [])

    return (
        <div>
            <h2>Car Form</h2>
            <CarForm setCars={setCars} updateCar={updateCar}/>

            <hr/>

            <h2>Cars</h2>
            <Cars cars={cars} setUpdateCar={setUpdateCar} setCars={setCars}/>
        </div>
    );
}

export {App};