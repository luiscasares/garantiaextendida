<template>
  <v-dialog v-model="show" max-width="650">
    <v-card>
      <v-card-title style="background: #1a7eba" class="headline text-center white--text">
        {{ isEdit ? 'Editar' : 'Agregar' }} distribuidor
      </v-card-title>
      <v-container grid-list-md class="pa-5">
        <v-form :disabled="loading" ref="form" lazy-validation>
          <v-row class="px-1">
            <v-col cols="6">
              <v-text-field
                v-model="form.nombreDistribuidor"
                :rules="[rules.required]"
                label="Nombre del distribuidor*"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="form.direccionDistribuidor"
                :rules="[rules.required]"
                label="Dirección del distribuidor*"
              ></v-text-field>
            </v-col>

            <v-col md="4">
              <v-text-field
                v-model="form.tel1"
                :rules="[rules.required]"
                label="Telefono 1*"
              ></v-text-field>
            </v-col>
            <v-col md="4">
              <v-text-field v-model="form.tel2" label="Telefono 2"></v-text-field>
            </v-col>
            <v-col md="4">
              <v-text-field v-model="form.tel3" label="Telefono 3"></v-text-field>
            </v-col>
            <v-col md="6">
              <v-text-field
                v-model="form.email"
                :rules="[rules.required, rules.email]"
                label="Email*"
              ></v-text-field>
            </v-col>
            <v-col md="6">
              <v-text-field v-model="form.web" label="Sitio web"></v-text-field>
            </v-col>

            <v-col md="6">
              <v-select
                v-model="form.activo"
                :items="statusItems"
                :rules="[rules.required]"
                label="Estatus*"
              ></v-select>
            </v-col>
            <v-col md="6">
              <v-select
                v-model="form.idEstado"
                :items="stateItems"
                :rules="[rules.required]"
                label="Estado*"
              ></v-select>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :loading="loading" color="darken-1" text @click="show = false">Cancelar</v-btn>
        <v-btn :loading="loading" color="primary" dark @click="save">
          Guardar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { rules } from '@/helpers/form';
import { mapActions, mapState } from 'vuex';
export default {
  props: {
    dialog: {
      type: Boolean,
      default: null,
    },
    currentDis: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      rules,
      loading: false,
      form: {},
      statusItems: [
        {
          value: '1',
          text: 'Activo',
        },
        {
          value: '0',
          text: 'Inactivo',
        },
      ],
    };
  },
  computed: {
    ...mapState('distribuidores', ['states']),
    isEdit() {
      return this.currentDis && Object.keys(this.currentDis).length > 0;
    },
    show: {
      get() {
        return this.dialog;
      },
      set(value) {
        if (!value) {
          this.form = {};
          this.$emit('close');
        }
      },
    },
    stateItems() {
      return this.states.map(state => ({ value: state.idEstado, text: state.Estado }));
    },
  },
  watch: {
    dialog(val) {
      if (val) {
        if (this.isEdit) {
          const { Tel1, Tel2, Tel3 } = this.currentDis;
          console.log(Tel1);
          this.form = { ...this.currentDis, tel1: Tel1, tel2: Tel2, tel3: Tel3 };
        }
      }
    },
  },
  methods: {
    ...mapActions('distribuidores', ['createDistribuidor', 'updateDistribuidor']),
    save() {
      const isValid = this.$refs.form.validate();
      if (!isValid) {
        return;
      }
      if (this.isEdit) {
        this.updateDistribuidor({ data: this.form, id: this.currentDis.idDistribuidor });
      } else {
        this.createDistribuidor(this.form);
      }
      this.show = false;
    },
  },
};
</script>

<style></style>
