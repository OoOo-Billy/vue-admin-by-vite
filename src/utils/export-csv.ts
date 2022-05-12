/**
 * 把 object[] 类的json数据转换为csv格式的文件并输出
 * @param {object[]} source 源数据
 * @param {object} map 表格头与数据key的映射
 */
export const exportCSV = <T extends {}>(
  source: T[],
  map: Record<keyof T, string>,
  fileName?: string
) => {
  const keysSort = Reflect.ownKeys(map) as unknown as Array<keyof T>;
  let str = `${keysSort.map(key => map[key])}\n`;
  // 增加\t为了不让表格显示科学计数法或者其他格式
  for (let i = 0; i < source.length; i++) {
    for (const key of keysSort) {
      str += `${source[i][key]}\t,`;
    }
    str += '\n';
  }
  const uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str);
  const a = document.createElement('a');
  a.href = uri;
  fileName || (fileName = '导出数据');
  a.download = /csv/.test(fileName) ? fileName : `${fileName}.csv`;
  a.click();
};
