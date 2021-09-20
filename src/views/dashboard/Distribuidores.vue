<template>
  <v-container>
    <v-row align="center" justify="center" no-gutters>
      <v-col class="text-center text-md-right mb-3">
        <v-btn color="#FF5072" dark @click="showAddEditDistribuidor()">
          Añadir distribuidor
        </v-btn>
      </v-col>

      <v-col class="mt-5" cols="12">
        <v-text-field class="mb-5" label="Buscar" v-model="search"></v-text-field>
        <v-data-table
          ref="table"
          item-class="success"
          :headers="headers"
          :items="distribuidoresItems"
          :server-items-length="total"
          :options.sync="pagOptions"
          :footer-props="{
            disableItemsPerPage: true,
            itemsPerPageText: '',
          }"
          :loading="loadingItems"
          no-data-text="Sin datos para mostrar"
          :mobile-breakpoint="0"
        >
          <template slot="loading">
            <div class="mt-5">
              <p>Cargando...</p>
            </div>
          </template>

          <template v-slot:[`item.activo`]="{ value }">
            <v-chip class="ma-2" :color="value === '1' ? 'green' : 'red'" text-color="white">
              {{ value === '1' ? 'Activo' : 'Inactivo' }}
            </v-chip>
          </template>

          <template v-slot:[`item.actions`]="{ item }">
            <div class="text-center">
              <v-icon color="grey darken-1" class="mr-2" @click="showAddEditDistribuidor(item)">
                mdi-pencil
              </v-icon>
              <v-icon color="grey darken-1" @click="showDeleteDistribuidor(item)">
                mdi-trash-can-outline
              </v-icon>
            </div>
          </template>
        </v-data-table>
      </v-col>
    </v-row>

    <AddEditDistribuidor
      :dialog="dialogAddEdit"
      :currentDis="currentDistribuidor"
      @close="dialogAddEdit = false"
    ></AddEditDistribuidor>

    <v-dialog v-model="dialogDelete" max-width="290">
      <v-card>
        <v-card-title class="headline"> Eliminar Distribuidor </v-card-title>
        <v-card-text> ¿Estas seguro que deseas eliminar este distribuidor?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialogDelete = false">
            Cancelar
          </v-btn>
          <v-btn color="green darken-1" text @click="onDeleteDistribuidor()">
            Aceptar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import AddEditDistribuidor from '@/components/distribuidores/AddEditDistribuidor.vue';
export default {
  components: {
    AddEditDistribuidor,
  },
  data() {
    return {
      dialogDelete: false,
      dialogAddEdit: false,
      currentDistribuidor: null,
      pagOptions: {},
      search: '',
      delayTimerSearch: null,
      loadingSearch: false,
      loadingItems: false,
      headers: [
        {
          text: 'Nombre',

          sortable: false,
          value: 'nombreDistribuidor',
        },
        {
          text: 'Correo',
          align: 'center',
          sortable: false,
          value: 'email',
        },
        {
          value: 'activo',
          text: 'Estatus',
          align: 'center',
          sortable: false,
        },
        {
          value: 'actions',
          text: 'Acciones',
          align: 'center',
          sortable: false,
        },
      ],
      items: [{ nombreDistribuidor: 'juan' }],
    };
  },
  computed: {
    ...mapState('distribuidores', ['distribuidores', 'total', 'filters']),
    distribuidoresItems() {
      return this.distribuidores;
    },
  },
  created() {
    this.pagOptions = {
      itemsPerPage: this.filters.pageSize,
    };
    this.findAllStates();
  },

  watch: {
    search(val) {
      clearTimeout(this.delayTimerSearch);
      this.delayTimerSearch = setTimeout(async () => {
        this.updateFilters({ search: val });
        this.getDataDis();
        this.loadingSearch = false;
      }, 400);
    },
    async pagOptions() {
      const { page } = this.pagOptions;
      console.log(page);
      this.updateFilters({ pageNum: page });

      await this.getDataDis();
    },
  },
  methods: {
    ...mapMutations('distribuidores', ['updateFilters']),
    ...mapActions('distribuidores', [
      'findAllDistribuidores',
      'deleteDistribuidor',
      'findAllStates',
    ]),
    async getDataDis() {
      this.loadingItems = true;
      await this.findAllDistribuidores();

      this.loadingItems = false;
    },
    showAddEditDistribuidor(distribuidor) {
      this.dialogAddEdit = true;
      if (distribuidor) {
        this.currentDistribuidor = distribuidor;
      }
    },
    showDeleteDistribuidor(distribuidor) {
      this.dialogDelete = true;
      this.currentDistribuidor = distribuidor;
    },
    async onDeleteDistribuidor() {
      await this.deleteDistribuidor(this.currentDistribuidor.idDistribuidor);
      this.dialogDelete = false;
    },
  },
};
</script>

<style></style>
