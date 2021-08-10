import { defineStore } from 'pinia';

export const useLayoutStore = defineStore({
  id: 'layout',
  state: () => ({
    sidebarCollapse: false,
  }),
  actions: {
    toggleCollapse() {
      this.sidebarCollapse = !this.sidebarCollapse;
    },
  },
});
