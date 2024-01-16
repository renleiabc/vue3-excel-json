import type { App } from 'vue';

export interface InstallOptions {
  /** @default `ElIcon` */
  prefix?: string;
}
// eslint-disable-next-line no-unused-vars
declare const _default: (app: App, { prefix }?: InstallOptions) => void;
export default _default;
export { default as ExcelExportJson } from './dist/src/components/ExcelExportJson.vue';
export { default as JsonExportExcel } from './dist/src/components/JsonExportExcel.vue';
