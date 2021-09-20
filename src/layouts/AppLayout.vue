<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
const defaultLayout = 'AppLayoutDefault';
export default {
  name: 'AppLayout',
  computed: {
    layout() {
      let layout = this.$route.meta.layout || defaultLayout;
      if (this.$route.matched && this.$route.matched.length > 1) {
        const route = this.$route.matched[0];
        layout = route.meta.layout || defaultLayout;
      }
      return () => import(`@/layouts/${layout}.vue`);
    },
  },
};
</script>
