import axios from 'axios';

export default {
    getItems: () => {
        return axios.get('/api/results').then(result => result.data)
    },
    deleteItem: id => {
        return axios.delete(`api/results/${id}`).then(result => result.data)
    },
    saveItem: itemData => {
        return axios.post('/api/post', itemData).then(result => result.data);
    }
};