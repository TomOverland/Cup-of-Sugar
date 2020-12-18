import axios from "axios";

export default {
  getItems: () => {
    return axios
      .get("http://localhost:3001/api/results/")
      .then((result) => result.data);
  },
  getFilteredItems: (categoryArr) => {
    console.log("getFilteredItems", categoryArr);
    return axios
      .get(`http://localhost:3001/api/results/filtered/${categoryArr}`)
      .then((result) => result.data)
      .catch((err) => console.log(err));
  },
  getSingleItem: (id) => {
    return axios
      .get(`http://localhost:3001/api/result/${id}`)
      .then((result) => result.data);
  },
  deleteItem: (id) => {
    return axios.delete(`api/deleteitem/${id}`).then((result) => result.data);
  },
  saveItem: (itemData) => {
    return axios
      .post("http://localhost:3001/api/item/postnewitem", itemData)
      .then((result) => result.data);
  },
  getUsers: () => {
    return axios
      .get("http://localhost:3001/api/users/")
      .then((result) => result.data);
  },
  getSingleUser: (id) => {
    return axios
      .get(`http://localhost:3001/api/user/${id}`)
      .then((result) => result.data);
  },
  getUserByAuth0: (auth0_id) => {
    return axios
      .get(`http://localhost:3001/api/users/${auth0_id}`)
      .then((result) => result.data);
  },
  postUser: (userData) => {
    return axios
      .post("http://localhost:3001/api/newuser/", userData)
      .then((result) => result.data);
  },
};
