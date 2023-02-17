import {axiosService} from "./axiosService";

import {urls} from "../configs";


const postsService = {
    getAll: () => axiosService.get(urls.posts),
    getById: (postId) => axiosService.get(`${urls.posts}/${postId}`)
}

export {
    postsService
}