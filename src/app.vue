<template>
  <MenuComponent />
  <router-view />
  <!-- <popup-component /> -->
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  methods: {},
  setup() {
    return { ...useI18n() };
  },
  components: {
    PopupComponent: defineAsyncComponent(() => import("@/components/popup.vue")),
    MenuComponent: defineAsyncComponent(() => import("@/components/menu.vue")),
  },
});
</script>

<style lang="scss">
@use "@/styles/reset.scss";
@use "@/styles/typography.scss";
@use "@/styles/themes/yuuko-best-girl.scss";

:root {
  --anim-dur: 300ms;
  // --anim-timing-func: cubic-bezier(0.19, 1, 0.22, 1);
  --anim-timing-func: cubic-bezier(0.165, 0.84, 0.44, 1);
}

#app {
  color: var(--font-color);
  background: var(--bg-color); // url(assets/bg.webp) center center no-repeat fixed;
  background-size: cover;
  margin: 0;

  position: relative;
}
</style>
