import axios from 'axios';

export default {
  games: {
    fetchAll: () => axios.get('/api/unsafegames').then(res => res.data.games),
    fetchById: id =>
      axios.get(`/api/unsafegames/${id}`).then(res => res.data.game),
    create: game =>
      axios.post('/api/unsafegames', { game }).then(res => res.data.game),
    update: game =>
      axios
        .put(`/api/unsafegames/${game._id}`, { game })
        .then(res => res.data.game),
    delete: game => axios.delete(`/api/unsafegames/${game._id}`)
  },
  users: {
    create: user => axios.post(`/api/users`, { user }),
    login: credentials =>
      axios.post('/api/auth', { credentials }).then(res => res.data.token)
  }
};
