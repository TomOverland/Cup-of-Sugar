import axios from "axios";

export default {
  getItems: () => {
    return axios
      .get("http://localhost:3001/api/results/")
      .then((result) => result.data);
  },
  deleteItem: (id) => {
    return axios.delete(`api/results/${id}`).then((result) => result.data);
  },
  saveItem: (itemData) => {
    return axios.post("/api/postnewitem", itemData).then((result) => result.data);
  },
};
