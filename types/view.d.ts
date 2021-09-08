/**
 * 此处存放用于页面构成的类型
 */

interface SelectOption {
  value: any;
  label: string;
}

interface TableColumnConfig {
  type?: string;
  index?: number;
  label: string;
  prop?: string;
  width?: string | number;
  minWidth?: string | number;
  render?: (ctx: {
    row: object;
    column: object;
    $index: number;
  }) => JSX.Element;
  formatter?: (
    row: object,
    column: object,
    cellValue: string,
    index: number
  ) => string;
}
