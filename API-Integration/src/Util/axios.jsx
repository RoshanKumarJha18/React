import axios from "axios";

const instance = axios.create({
    baseURL: "https://fakestoreapi.com"
})
export default instance;  // This will allow you to use the same axios instance across your application with the base URL set.