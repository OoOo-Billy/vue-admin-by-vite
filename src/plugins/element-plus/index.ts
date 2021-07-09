import type { App, Component } from 'vue';
import {
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  ElMenu,
  ElMenuItem,
  ElScrollbar,
  ElMessage,
  ElSubmenu,
} from 'element-plus';
import 'element-plus/packages/theme-chalk/src/base.scss';

type onDemandComponent = SFCWithInstall<Component & { name: string }>;

// 按需加载的组件
const components: onDemandComponent[] = [
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElScrollbar,
];
const plugins: onDemandComponent[] = [ElMessage];

const useElementPlus = (vm: App) => {
  components.forEach(component => {
    vm.component(component.name, component);
  });
  plugins.forEach(plugin => {
    vm.use(plugin);
  });
};

export default useElementPlus;
