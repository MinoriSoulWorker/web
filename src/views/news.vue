<template>
  <div class="latests">
    <template v-for="(latest, index) of latests" :key="index">
      <div class="loading" v-if="latest.text === null" />
      <div class="latest" v-else>
        <img class="latest-cover" :src="`sw/GUI/World/Maze_BG/${latest.cover}.png`" />
        <div class="latest-content">{{ latest.text }}</div>
      </div>
    </template>
  </div>

  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { zip } from "lodash";
import { NewsType } from "@/api/news/types";
import { apiNewsMeta, apiNewsContent } from "@/api/news";

type LatestNews = {
  text: string | null;
  cover: string;
  type: NewsType;
};

export default defineComponent({
  setup() {
    const latests = ref<LatestNews[]>([
      {
        cover: "ARKSHIP_BG",
        text: null,
        type: NewsType.announcements,
      },
      {
        cover: "BREAKOUT_BG",
        text: null,
        type: NewsType.updates,
      },
      {
        cover: "FRONTLINE_BG",
        text: null,
        type: NewsType.events,
      },
      {
        cover: "ROCCOTOWN_W_BG",
        text: null,
        type: NewsType.gmNotes,
      },
      {
        cover: "WOLFCRY_BG",
        text: null,
        type: NewsType.shop,
      },
    ]);

    onMounted(async () => {
      for (const latest of latests.value) {
        const response = await apiNewsMeta({ type: latest.type });
        const item = response.pop();

        if (typeof item !== "undefined") {
          const content = await apiNewsContent({ id: item.id, lang: "en" });
          latest.text = content;
        } else {
          latest.text = "...";
        }
      }
    });

    return { latests };
  },
});
</script>

<style lang="scss" scoped>
.loading {
  padding-top: 100%;

  background: url("../assets/fansite_logo.png") center center no-repeat;
  background-size: contain !important;

  animation: 0.77s var(--anim-timing-func) 0s infinite alternate loading-anim;
}

@keyframes loading-anim {
  from {
    opacity: 0.4;
    filter: blur(3px);
  }
  to {
    opacity: 1;
  }
}
</style>

<style lang="scss" scoped>
.latests {
  padding: 150px 20px 20px 20px;
  overflow: hidden;
  background: url("../assets/bg.webp") center center no-repeat;
  background-size: cover !important;

  gap: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-content: space-evenly;
}

.latest {
  display: grid;
  grid-template-rows: auto 1fr;
  transition: var(--anim-dur) var(--anim-timing-func);
  box-shadow: 0 0 4px black;

  &:hover {
    box-shadow: 0 0 4px var(--link-hover-color);
    transform: translateY(-10px);
  }
}

.latest-cover {
  object-fit: cover;
  width: 100%;
}

.latest-content {
  padding: 20px;
  background-color: var(--bg-color);
}
</style>
