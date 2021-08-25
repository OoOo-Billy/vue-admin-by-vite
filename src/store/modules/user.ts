import { defineStore } from 'pinia';
import { login as apiLogin, logout as apiLogout } from '@/api/account';
import router from '@/router';

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    nickname: '',
    authority: '',
    id: '',
  }),
  actions: {
    async login(param: LoginParams) {
      try {
        const res = await apiLogin(param);

        const { nickname, authority, id } = res;
        this.nickname = nickname;
        this.authority = authority;
        this.id = id;
      } catch {
        throw new Error();
      }
    },

    logout() {
      try {
        apiLogout();
      } catch {}
      setTimeout(() => {
        this.nickname = '';
        this.authority = '';
        this.id = '';
      }, 0);
      router.replace({ name: 'login' });
    },
  },
});
