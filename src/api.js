import axios from 'axios';

export default {
  products: {
    fetchAll: () => axios.get('/api/products').then(res => res.data.products),
    fetchById: id =>
      axios.get(`/api/products/${id}`).then(res => res.data.product),
    create: product =>
      axios.post('/api/products', { product }).then(res => res.data.product),
    update: product =>
      axios
        .put(`/api/products/${product._id}`, { product })
        .then(res => res.data.product),
    delete: product => axios.delete(`/api/products/${product._id}`)
  },
  users: {
    create: user => axios.post(`/api/users`, { user }),
    login: credentials =>
      axios.post('/api/auth', { credentials }).then(res => res.data.token)
  }
};
