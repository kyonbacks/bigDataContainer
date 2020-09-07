// src/index.js
// 导入组件，组件必须声明 name
import bigdatacontainer from './src/bigdatacontainer'

// 为组件提供 install 安装方法，供按需引入
bigdatacontainer.install = function (Vue) {
  Vue.component(bigdatacontainer.name, bigdatacontainer);
};
// 默认导出组件
export default bigdatacontainer;
