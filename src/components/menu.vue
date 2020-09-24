<template>
  <nav class="nav">
    <div class="menu-nav">
      <router-link class="menu-link menu-name" :to="{ name: 'home' }">{{ t("menu.minori") }}</router-link>
    </div>
    <div class="menu-nav">
      <router-link class="menu-link menu-name" :to="{ name: 'news' }">{{ t("menu.news.name") }}</router-link>
      <div class="menu-nav-add">
        <router-link class="menu-link" :to="{ name: 'news-announcements' }">{{ t("menu.news.sub.announcements") }}</router-link>
        <router-link class="menu-link" :to="{ name: 'news-updates' }">{{ t("menu.news.sub.updates") }}</router-link>
        <router-link class="menu-link" :to="{ name: 'news-events' }">{{ t("menu.news.sub.events") }}</router-link>
        <router-link class="menu-link" :to="{ name: 'news-gm-notes' }">{{ t("menu.news.sub.gmNotes") }}</router-link>
      </div>
    </div>
    <div class="menu-nav">
      <div class="menu-name">{{ t("menu.overview.name") }}</div>
      <div class="menu-nav-add">
        <router-link class="menu-link" :to="{ name: 'overview-game-info' }">{{ t("menu.overview.sub.gameInfo") }}</router-link>
        <router-link class="menu-link" :to="{ name: 'overview-class' }">{{ t("menu.overview.sub.class") }}</router-link>
      </div>
    </div>
    <div class="menu-nav">
      <div class="menu-name">{{ t("menu.adventure.name") }}</div>
      <div class="menu-nav-add">
        <router-link class="menu-link" :to="{ name: 'adventure-search-friends' }">{{ t("menu.adventure.sub.searchFriends") }}</router-link>
        <router-link class="menu-link" :to="{ name: 'adventure-search-guilds' }">{{ t("menu.adventure.sub.searchGuilds") }}</router-link>
      </div>
    </div>
    <div class="menu-nav">
      <div class="menu-name">{{ t("menu.shop.name") }}</div>
      <div class="menu-nav-add">
        <router-link class="menu-link" :to="{ name: 'shop-pay' }">{{ t("menu.shop.sub.pay") }}</router-link>
        <router-link class="menu-link" :to="{ name: 'shop-coupon' }">{{ t("menu.shop.sub.coupon") }}</router-link>
        <router-link class="menu-link" :to="{ name: 'shop-trade' }">{{ t("menu.shop.sub.trade") }}</router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  setup() {
    return { ...useI18n() };
  },
});
</script>

<style lang="scss" scoped>
.nav {
  z-index: 100;
  user-select: none;
  white-space: nowrap;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  text-align: center;
  display: flex;
  text-shadow: 0 0 4px black;
  backdrop-filter: blur(10px);

  background-color: rgba(0, 0, 0, 0.3);
  transition: var(--anim-dur) var(--anim-timing-func);

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);

    .menu-nav-add {
      opacity: 1;
      visibility: unset;
      padding: 20px;
      max-height: unset;
    }
  }
}

.menu-name {
  padding: 20px 30px;
  font-size: 18rem;
  text-transform: uppercase;
}

.menu-nav-add {
  transition: var(--anim-dur) var(--anim-timing-func);
  opacity: 0;
  visibility: hidden;
  padding: 0 20px;
  max-height: 0;
  overflow: hidden;
}

.menu-link {
  display: block;
  // line-height: 1;

  &:hover {
    color: var(--link-hover-color);
  }
}
</style>
