Based on Vue3 plugin, quickly implement the function of uploading Excel to JSON, importing JSON, and exporting Excel

Install it

```
pnpm install vue3-excel-json
```

Specific usage:

This plugin has two components:This plugin has two components: ExcelExportJson and JsonExportExcel

Global import

main.ts

```javascript
import vue3ExcelJson from 'vue3-excel-json';
import 'vue3-excel-json/dist/style.css';
createApp(App).use(vue3ExcelJson).mount('#app');
```

Upload Excel to JSON use ExcelExportJson, import in component

```javascript
<div>
  <excel-export-json size="large" @change="handleChange"></excel-export-json>
</div>
<script setup lang="ts">
const handleChange = (data: any) => {
  console.log('🚀 ~ handleChange ~ data:', data);
};
</script>
```

importing JSON, and exporting Excel use JsonExportExcel, import in component

```javascript
<div>
 <JsonExportExcel :json-data="jsonData" :fields="headerName"  :title="title"></JsonExportExcel>
</div>
<script setup lang="ts">
const handleChange = (data: any) => {
  console.log('🚀 ~ handleChange ~ data:', data);
};
const headerName = {
  name: 'name',
  city: 'city',
  country: 'country',
  birthdate: 'birthdate'
};
const jsonData = ref([
  {
    name: 'Tony Peña',
    city: 'New York',
    country: 'United States',
    birthdate: '1978-03-15'
  },
  {
    name: 'Thessaloniki',
    city: 'Athens',
    country: 'Greece',
    birthdate: '1987-11-23'
  }
]);
const title = 'Person information table';
</script>
```

## Props List

| Name      |  Type  | Description                                                   |     |     |
| :-------- | :----: | ------------------------------------------------------------- | :-: | :-: |
| json-data | Array  | Data to be exported soon                                      |
| fields    | Object | The fields and headers within the JSON object to be exported. |
| title     | string | The title of the data.                                        |
