import { NewsType } from '@/api/news/types';
import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    name: 'home',
    path: '/',
    component: () => defineAsyncComponent(() => import('@/views/home.vue'))
  },
  {
    path: '/news',
    component: () => defineAsyncComponent(() => import('@/views/news.vue')),
    children: [{
      name: 'news',
      path: '/news',
      component: () => defineAsyncComponent(() => import('@/views/news/home.vue'))
    }, {
      name: 'news-announcements',
      path: 'announcements',
      component: () => defineAsyncComponent(() => import('@/components/dummy.vue')),
      props: {
        type: NewsType.announcements
      }
    }, {
      name: 'news-updates',
      path: 'updates',
      component: () => defineAsyncComponent(() => import('@/components/dummy.vue')),
      props: {
        type: NewsType.updates
      }
    }, {
      name: 'news-events',
      path: 'events',
      component: () => defineAsyncComponent(() => import('@/components/dummy.vue')),
      props: {
        type: NewsType.events
      }
    }, {
      name: 'news-gm-notes',
      path: 'gm-notes',
      component: () => defineAsyncComponent(() => import('@/components/dummy.vue')),
      props: {
        type: NewsType.gmNotes
      }
    }, {
      name: 'news-shop',
      path: 'shop',
      component: () => defineAsyncComponent(() => import('@/components/dummy.vue')),
      props: {
        type: NewsType.shop
      }
    }]
  }, {
    path: '/overview',
    component: () => defineAsyncComponent(() => import('@/components/dummy.vue')),
    children: [
      {
        name: 'overview-game-info',
        path: 'game-info',
        component: () => defineAsyncComponent(() => import('@/components/dummy.vue'))
      },
      {
        name: 'overview-class',
        path: 'class',
        component: () => defineAsyncComponent(() => import('@/components/dummy.vue'))
      },
    ]
  }, {
    path: '/adventure',
    component: () => defineAsyncComponent(() => import('@/components/dummy.vue')),
    children: [
      {
        name: 'adventure-search-friends',
        path: 'search-friends',
        component: () => defineAsyncComponent(() => import('@/components/dummy.vue'))
      },
      {
        name: 'adventure-search-guilds',
        path: 'search-guilds',
        component: () => defineAsyncComponent(() => import('@/components/dummy.vue'))
      },
    ]
  }, {
    path: '/shop',
    component: () => defineAsyncComponent(() => import('@/components/dummy.vue')),
    children: [
      {
        name: 'shop-pay',
        path: 'pay',
        component: () => defineAsyncComponent(() => import('@/components/dummy.vue'))
      },
      {
        name: 'shop-coupon',
        path: 'coupon',
        component: () => defineAsyncComponent(() => import('@/components/dummy.vue'))
      },
      {
        name: 'shop-trade',
        path: 'trade',
        component: () => defineAsyncComponent(() => import('@/components/dummy.vue'))
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),

  routes,
});

export default router;
