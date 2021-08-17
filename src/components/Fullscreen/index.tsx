import { defineComponent } from 'vue';
import { useFullscreen } from '@vueuse/core';
import style from './fullscreen.module.scss';

const Fullscreen = defineComponent(() => {
  const { toggle } = useFullscreen();

  return () => (
    <div class={style['screen-toggle']} onClick={toggle}>
      <i class="el-icon-full-screen"></i>
    </div>
  );
});

export default Fullscreen;
