import {axiosService} from "./axiosService";

import {urls} from "../configs";


const albumsService = {
    getAll: () => axiosService.get(urls.todos),
    getById: (id) => axiosService.get(`${urls.todos}/${id}`)
}

export {
    albumsService
}