import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    nickname: '',
    authority: '',
    id: '',
  }),
  actions: {
    login() {},
  },
});
