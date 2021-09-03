import type { App, Component } from 'vue';
import {
  ElAvatar,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  ElCard,
  ElCol,
  ElDrawer,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElForm,
  ElFormItem,
  ElInput,
  ElMenu,
  ElMenuItem,
  ElOption,
  ElRow,
  ElScrollbar,
  ElSelect,
  ElSubmenu,
} from 'element-plus';
import 'element-plus/packages/theme-chalk/src/base.scss';

type onDemandComponent = SFCWithInstall<Component & { name: string }>;

// 按需加载的组件
const components: onDemandComponent[] = [
  ElAvatar,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  ElCard,
  ElCol,
  ElDrawer,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElForm,
  ElFormItem,
  ElInput,
  ElMenu,
  ElMenuItem,
  ElOption,
  ElRow,
  ElScrollbar,
  ElSelect,
  ElSubmenu,
];
const plugins: onDemandComponent[] = [];

const useElementPlus = (vm: App) => {
  components.forEach(component => {
    vm.component(component.name, component);
  });
  plugins.forEach(plugin => {
    vm.use(plugin);
  });
};

export default useElementPlus;
