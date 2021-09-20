const defaultToastConfig = {
  show: false,
  time: 3000,
  text: 'Mensaje de prueba',
  color: 'success',
};

export const ui = {
  namespaced: true,
  state: () => ({
    toast: { ...defaultToastConfig },
  }),

  mutations: {
    setToastVisibility(state, visible) {
      state.toast.show = visible;
    },
    setToast(state, config) {
      state.toast = Object.assign(defaultToastConfig, config);
    },
  },
  actions: {
    showToast({ commit }, config) {
      const data = config || {};
      data.show = true;
      commit('setToast', data || {});
    },
  },
};
