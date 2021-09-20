export const rules = {
  required: v => !!v || 'Este campo es requerido',
  maxLength: (maxnum, v) => (v && v.length <= maxnum) || `Maximo ${maxnum} caracteres`,
  email: v => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(v) || 'Ingresa un email valido';
  },
};
