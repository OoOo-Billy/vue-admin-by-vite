import { defineComponent } from 'vue';
import style from './avatar.module.scss';

const Avatar = defineComponent<{
  nickname: string;
}>((props, { emit }) => {
  return () => (
    <el-dropdown>
      {{
        default: () => (
          <div class={style['avatar']}>
            <el-avatar class={style['avatar__icon']}>
              {props.nickname?.substr(0, 1)}
            </el-avatar>
            <span>{props.nickname}</span>
          </div>
        ),
        dropdown: () => (
          <el-dropdown-menu>
            <el-dropdown-item
              icon="el-icon-switch-button"
              onClick={() => {
                emit('logout');
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

Avatar.props = {
  nickname: String,
};
Avatar.emits = ['logout'];

export default Avatar;
