import {axiosService} from "./axiosService";
import {urls} from "../configs";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    create: (newCar) => axiosService.post(urls.cars, newCar),
    getById: (id) => axiosService.get(`${urls.cars}/${id}`),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`),
    updateById: (id, data) => axiosService.put(`${urls.cars}/${id}`, data)
}

export {
    carService
}