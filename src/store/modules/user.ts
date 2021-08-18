import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    nickname: 'Administrator',
  }),
  actions: {},
});
