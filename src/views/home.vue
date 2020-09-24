<template>
  <div class="video-foreground">
    <iframe class="video-iframe" src="https://www.youtube.com/embed/AAjfsJzlFak?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=AAjfsJzlFak&mute=1" frameborder="0" allowfullscreen></iframe>
    <div class="buttons">
      <a href="msw.zip" class="button install">{{ t("pages.home.buttons.install") }}</a>
      <div class="button play">{{ t("pages.home.buttons.play") }}</div>
    </div>
  </div>

  <div class="system-requirements">
    <div class="system-requirements-item system-requirements-header">{{ t("pages.home.systemRequirements.category") }}</div>
    <div class="system-requirements-item system-requirements-header">{{ t("pages.home.systemRequirements.min") }}</div>
    <div class="system-requirements-item system-requirements-header">{{ t("pages.home.systemRequirements.opt") }}</div>

    <div class="system-requirements-item system-requirements-header">{{ t("pages.home.systemRequirements.os") }}</div>
    <div class="system-requirements-item">Windows 7 x32</div>
    <div class="system-requirements-item">Windows 7 x64</div>

    <div class="system-requirements-item system-requirements-header">{{ t("pages.home.systemRequirements.cpu") }}</div>
    <div class="system-requirements-item">Intel Core 2 duo E8300</div>
    <div class="system-requirements-item">Intel Core i5 760</div>

    <div class="system-requirements-item system-requirements-header">{{ t("pages.home.systemRequirements.ram") }}</div>
    <div class="system-requirements-item">2GB</div>
    <div class="system-requirements-item">4GB</div>

    <div class="system-requirements-item system-requirements-header">{{ t("pages.home.systemRequirements.gpu") }}</div>
    <div class="system-requirements-item">NVIDIA GeForce GT440 / AMD Radeon HD 4850</div>
    <div class="system-requirements-item">NVIDIA GeForce GTX 460 / AMD Radeon HD 5830</div>

    <div class="system-requirements-item system-requirements-header">{{ t("pages.home.systemRequirements.hdd") }}</div>
    <div class="system-requirements-item system-requirements-item-wide">20GB</div>

    <div class="system-requirements-item system-requirements-header">{{ t("pages.home.systemRequirements.hdd") }}</div>
    <div class="system-requirements-item system-requirements-item-wide">DirectX 9.0c</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  setup() {
    return { ...useI18n() };
  },
});
</script>

<style lang="scss" scoped>
.video-foreground {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
  margin-bottom: 30px;
}

.video-iframe {
  z-index: -100;
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
}

.buttons {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: grid;
  grid-auto-flow: column;
  justify-content: space-evenly;
  align-content: center;

  &:focus {
    outline: unset;
  }
}

.button {
  cursor: pointer;
  user-select: none;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  padding: 20px 30px;
  text-shadow: 0 0 4px black;

  &:hover {
    background-color: rgba(202, 1, 85, 0.7);
  }
}
</style>

<style lang="scss" scoped>
$color: rgba(0, 0, 0, 0.3);

.system-requirements {
  border-bottom: 1px solid $color;
  border-left: 1px solid $color;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: start;
  text-align: center;
}

.system-requirements-item {
  padding: 30px;
  line-height: 1;
  background-color: $color;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
    text-shadow: 0 0 4px black;
  }
}

.system-requirements-header {
  background-color: rgba(0, 0, 0, 0.7);
  text-shadow: 0 0 4px black;
  text-transform: uppercase;
}

.system-requirements-item-wide {
  grid-column: 2 / -1;
}

.system-requirements > .system-requirements-item {
  border-top: 1px solid $color;
  border-right: 1px solid $color;
}
</style>
