import axios from 'axios';
const axiosClient = axios.create({
    baseURL: 'http://localhost:4000',
});

// eslint-disable-next-line
export default {
    films: {
        fetchAll: () => axiosClient.get('/api/films').then(result => result.data.films),
        fetchById: id => axiosClient.get(`/api/films/${id}`).then(result => result.data.film),
        create: film => axiosClient.post('/api/films', {film}).then(result => result.data.film),
        update: film => axiosClient.put(`/api/films/${film._id}`, {film}).then(result => result.data.film),
        delete: film => axiosClient.delete(`/api/films/${film._id}`),
    },
}
