<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="downloadExcel">
          <v-list-item-action>
            <v-icon>mdi-chart-bubble</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Descargar Excel</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div class="v-navigation-drawer__border"></div>
    </v-navigation-drawer>

    <v-app-bar clipped-left fixed app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-app-bar>

    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>

    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>

    <!-- Snackbar -->
    <!-- Snackbar -->
    <v-snackbar v-model="show" :timeout="toast.time" top right :color="toast.color">
      {{ toast.text }}
      <template v-slot:action="{ attrs }">
        <v-btn dark text v-bind="attrs" @click="show = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Distribuidores',
          to: '/dashboard/distribuidores',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    };
  },

  computed: {
    ...mapState('ui', ['toast']),

    show: {
      get() {
        return this.toast.show;
      },
      set(value) {
        this.setToastVisibility(value);
      },
    },
  },
  methods: {
    ...mapMutations('ui', ['setToastVisibility']),
    async downloadExcel() {
      try {
        const res = await this.axios.get('exportarExcel.php');
        const i = document.createElement('a');
        i.href = res.data.file;
        document.body.appendChild(i);
        i.download = 'Garantias.xlsx';
        i.click();
        i.remove();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
