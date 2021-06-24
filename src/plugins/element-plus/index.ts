import type { App, Component } from 'vue';
import type { SFCWithInstall } from '~deps/element-plus/packages/utils/types';
import {
  ElButton,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElScrollbar,
  ElMessage,
} from 'element-plus';

type LazyComponent = SFCWithInstall<Component & { name: string }>;

// 懒加载的组件
const components: LazyComponent[] = [
  ElButton,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElScrollbar,
];
const plugins: LazyComponent[] = [ElMessage];

const useElementPlus = (vm: App) => {
  components.forEach(component => {
    vm.component(component.name, component);
  });
  plugins.forEach(plugin => {
    vm.use(plugin);
  });
};

export default useElementPlus;
