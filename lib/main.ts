import ExcelExportJson from '../src/components/ExcelExportJson.vue';
import JsonExportExcel from '../src/components/JsonExportExcel.vue';
// 按需引入
export { ExcelExportJson, JsonExportExcel };
const components = [ExcelExportJson, JsonExportExcel];

// 批量组件注册
const install = {
  install(App: any) {
    components.forEach((item) => {
      console.log('🚀 ~ components.forEach ~ item:', item);
      App.component(item.name, item);
    });
  }
};

export default install;
