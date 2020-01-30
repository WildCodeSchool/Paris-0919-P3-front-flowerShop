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
  },
  email: {
    send: (type, values) =>
      axios.post(`/api/email/${type}`, { values }).then(res => res.data.message)
  },
  cart: {
    fetchAll: userId => axios.get(`/api/cart/${userId}`).then(res => res.data),
    add: (userId, productId, size) =>
      axios
        .post(`/api/cart/${userId}/${productId}`, size)
        .then(res => res.data),
    delete: (userId, productId) =>
      axios.delete(`/api/cart/${userId}/${productId}`).then(res => res.data)
  }
};
