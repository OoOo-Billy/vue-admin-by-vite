import { defineStore } from 'pinia';
import { login as apiLogin, logout as apiLogout } from '@/api/account';

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
        if (res) {
          const { nickname, authority, id } = res;
          this.nickname = nickname;
          this.authority = authority;
          this.id = id;
        }
      } catch {}
    },

    logout() {
      try {
        apiLogout();
      } catch {}
      this.nickname = '';
      this.authority = '';
      this.id = '';
      window.location.href = '/login';
    },
  },
});
