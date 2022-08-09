import axios from "axios";

const instance = axios.create({
    baseURL: 'https://9cxlt1wgo5.execute-api.us-east-1.amazonaws.com/api',
    timeout: 5000,
    headers: { 'Authorization': 'basic bd65f90a-4832-48cf-8a11-d6ca745c2c1d' }
});

export default instance;
