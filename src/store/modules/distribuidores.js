import axios from 'axios';
export const distribuidores = {
  namespaced: true,
  state: () => ({
    distribuidores: [],
    states: [],
    total: 0,
    filters: {
      pageSize: 50,
      pageNum: 1,
      search: '',
    },
  }),

  mutations: {
    setDistribuidores(state, value) {
      state.distribuidores = value;
    },
    setTotalDistribuidores(state, value) {
      state.total = value;
    },
    setStates(state, value) {
      state.states = value;
    },

    updateFilters(state, filters) {
      state.filters = Object.assign({}, state.filters, filters);
    },
  },
  actions: {
    async findAllStates({ dispatch, commit }) {
      try {
        const res = await axios.get(`/getEstados.php`);
        console.log(res);
        commit('setStates', res.data.estados);
      } catch (error) {
        console.log(error);
        dispatch(
          'ui/showToast',
          { text: 'Ocurrio un error al consultar los estados', color: 'warning' },
          { root: true }
        );
      }
    },
    async findAllDistribuidores({ dispatch, state, commit }) {
      try {
        const res = await axios.post(
          `/distribuidores.php`,
          { accion: 'getAll' },
          {
            params: state.filters,
          }
        );

        commit('setDistribuidores', res.data.distribuidores);
        if (state.filters.pageNum === 1) {
          commit('setTotalDistribuidores', Number(res.data.total));
        }
      } catch (error) {
        console.log('que onda we', error);
        dispatch(
          'ui/showToast',
          { text: 'Ocurrio un error al consultar los distribuidores', color: 'warning' },
          { root: true }
        );
      }
    },
    async createDistribuidor({ dispatch }, data) {
      try {
        const res = await axios.post(`/distribuidores.php`, { accion: 'create', ...data });
        console.log(res);
        dispatch(
          'ui/showToast',
          { text: 'Distribuidor agregado con exito', color: 'success' },
          { root: true }
        );
        dispatch('findAllDistribuidores');
      } catch (error) {
        console.log(error);
        dispatch(
          'ui/showToast',
          { text: 'Ocurrio un error al crear el distribuidor', color: 'error' },
          { root: true }
        );
      }
    },
    async updateDistribuidor({ dispatch }, { id, data }) {
      try {
        const res = await axios.put(`/distribuidores.php`, {
          accion: 'update',
          ...data,
          idDistribuidor: id,
        });
        console.log(res);
        dispatch(
          'ui/showToast',
          { text: 'Distribuidor actualizado con exito', color: 'success' },
          { root: true }
        );
        dispatch('findAllDistribuidores');
      } catch (error) {
        console.log(error);
        dispatch(
          'ui/showToast',
          { text: 'Ocurrio un error al actualizar el distribuidor', color: 'error' },
          { root: true }
        );
      }
    },
    async deleteDistribuidor({ dispatch }, id) {
      try {
        await axios.delete(`/distribuidores.php`, {
          data: { accion: 'delete', idDistribuidor: id },
        });
        dispatch(
          'ui/showToast',
          { text: 'Distribuidor eliminado con èxito', color: 'success' },
          { root: true }
        );
        dispatch('findAllDistribuidores');
      } catch (error) {
        console.log(error);
        dispatch(
          'ui/showToast',
          { text: 'Ocurrio un error al crear el distribuidor', color: 'error' },
          { root: true }
        );
      }
    },
  },
};
