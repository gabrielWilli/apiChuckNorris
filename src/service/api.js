import Axios from 'axios';

const Api = Axios.create({
  baseURL: "https://api.chucknorris.io/jokes"
});

export default Api;