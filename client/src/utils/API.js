import axios from "axios";

export default {
  getItems: () => {
    return axios
      .get("http://localhost:3001/api/results/")
      .then((result) => result.data);
  },
  deleteItem: (id) => {
    return axios.delete(`api/deleteitem/:${id}`).then((result) => result.data);
  },
  saveItem: (itemData) => {
    return axios.post("http://localhost:3001/api/item/postnewitem", itemData).then((result) => result.data);
  },
};
