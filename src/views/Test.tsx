import { defineComponent } from 'vue';
import { useUserStore } from '@/store/modules/user';

const Test = defineComponent(() => {
  const store = useUserStore();

  return () => (
    <div>
      i'm tsx sfc.
      <el-button onClick={() => store.login({ id: 'admin', pwd: 'admin' })}>
        login
      </el-button>
      <el-button onClick={() => store.logout()}>logout</el-button>
    </div>
  );
});

export default Test;
