import axios from 'axios';
import router from '../../router';
export const auth = {
  namespaced: true,
  state: () => ({
    user: null,
    loggedIn: false,
  }),

  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setLoggedIn(state, val) {
      state.loggedIn = val;
    },
  },
  actions: {
    logout({ commit }) {
      localStorage.removeItem('token');
      commit('setUser', null);
      commit('setLoggedIn', null);
      router.replace('/master-login');
    },

    async login({ commit, dispatch }, data) {
      try {
        const res = await axios.post('/login.php', {
          email: data.email,
          password: data.password,
        });
        console.log(res);
        commit('setUser', { email: res.data.email });
        commit('setLoggedIn', true);

        const jwt = res.data.jwt;
        localStorage.setItem('token', jwt);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwt;

        router.push('/dashboard/distribuidores');
      } catch (error) {
        console.log(error);
        dispatch(
          'ui/showToast',
          { text: 'Usuario y/o contraseña incorrectos', color: 'warning' },
          { root: true }
        );
      }
    },
  },
};
