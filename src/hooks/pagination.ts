/**
 * 分页组件逻辑封装，配合表格 search
 */

import { reactive } from 'vue';

const generatePaginationRef = () =>
  reactive({ page: 1, pageSize: 10, total: 0 });

const generateOnPageChangeFn = (
  pagination: ReturnType<typeof generatePaginationRef>,
  callback: Function
): Function => {
  return ($event: number) => {
    pagination.page = $event;
    callback();
  };
};

const generateOnPageSizeChangeFn = (
  pagination: ReturnType<typeof generatePaginationRef>,
  callback: Function
): Function => {
  return ($event: number) => {
    pagination.pageSize = $event;
    if (pagination.page === 1) {
      callback();
    }
  };
};

export const usePagination = (
  callback: Function
): [
  typeof pagination,
  {
    onPageChange: ReturnType<typeof generateOnPageChangeFn>;
    onPageSizeChange: ReturnType<typeof generateOnPageSizeChangeFn>;
  }
] => {
  const pagination = generatePaginationRef();
  return [
    pagination,
    {
      onPageChange: generateOnPageChangeFn(pagination, callback),
      onPageSizeChange: generateOnPageSizeChangeFn(pagination, callback),
    },
  ];
};
