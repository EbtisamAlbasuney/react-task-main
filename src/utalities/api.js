import axios from "axios";

const apiConnectionString = "http://localhost:8000";

const instance = axios.create({
  baseURL: apiConnectionString,
});



export default instance;