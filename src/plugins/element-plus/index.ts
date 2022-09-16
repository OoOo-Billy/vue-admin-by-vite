import type { App, Component, Plugin } from 'vue';
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
  ElPagination,
  ElRow,
  ElScrollbar,
  ElSelect,
  ElSubMenu,
  ElTable,
  ElTableColumn,
} from 'element-plus';
import { registerIcon } from './icon';

// 按需加载的组件
const components: Component[] = [
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
  ElPagination,
  ElRow,
  ElScrollbar,
  ElSelect,
  ElSubMenu,
  ElTable,
  ElTableColumn,
];
const plugins: Plugin[] = [];

const registerComponentAndPlugin = (vm: App) => {
  components.forEach(component => {
    vm.component(component.name!, component);
  });
  plugins.forEach(plugin => {
    vm.use(plugin);
  });
};

const useElementPlus = (context: App) => {
  registerComponentAndPlugin(context);
};

// TODO find a better way to inject icons.
useElementPlus.useWithIcon = (context: App) => {
  registerComponentAndPlugin(context);
  registerIcon(context);
};

export default useElementPlus;
