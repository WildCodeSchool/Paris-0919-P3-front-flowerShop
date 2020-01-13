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
    send: values =>
      axios.post('/api/email', { values }).then(res => res.data.message)
  },
  articles: {
    fetchAll: () => axios.get('/api/articles').then(res => res.data.articles),
    fetchById: id =>
      axios.get(`/api/articles/${id}`).then(res => res.data.article),
    create: article =>
      axios.post('/api/articles', { article }).then(res => res.data.article),
    update: article =>
      axios
        .put(`/api/articles/${article._id}`, { article })
        .then(res => res.data.article),
    delete: article => axios.delete(`/api/articles/${article._id}`)
  }
};
