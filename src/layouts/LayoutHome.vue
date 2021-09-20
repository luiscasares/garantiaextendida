<template>
  <v-app>
    <v-app-bar color="primary" app height="80px">
      <v-img
        alt="Makita"
        class="shrink mx-auto "
        src="@/assets/img/logotipo_makita.png"
        width="219"
        height="100%"
        contain
      />
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>

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
  computed: {
    ...mapState('ui', ['toast']),

    show: {
      get() {
        return this.toast.show;
      },
      set(val) {
        this.setToastVisibility(val);
      },
    },
  },
  methods: {
    ...mapMutations('ui', ['setToastVisibility']),
  },
};
</script>
