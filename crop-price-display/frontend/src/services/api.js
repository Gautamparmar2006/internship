import axios from "axios";


const API = axios.create({

    baseURL:
    "https://crop-price-backend.onrender.com/api"

});


export default API;