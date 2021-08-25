import { defineComponent } from 'vue';
import { useUserStore } from '@/store/modules/user';
import style from './avatar.module.scss';

const Avatar = defineComponent(() => {
  const store = useUserStore();

  return () => (
    <el-dropdown>
      {{
        default: () => (
          <div class={style['avatar']}>
            <el-avatar class={style['avatar__icon']}>
              {store?.nickname?.substr(0, 1)}
            </el-avatar>
            <span>{store?.nickname}</span>
          </div>
        ),
        dropdown: () => (
          <el-dropdown-menu>
            <el-dropdown-item
              icon="el-icon-switch-button"
              onClick={() => {
                store.logout();
              }}
            >
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        ),
      }}
    </el-dropdown>
  );
});

export default Avatar;
