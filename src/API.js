import axios from "axios";

const baseURL = process.env.REACT_APP_DOG_API_URL;


const APIInstance = axios.create({
  baseURL,
});

export default (endpoint, options) => {
  return APIInstance.request({
    url: endpoint,
    ...options,
  }).then(res => res);
};