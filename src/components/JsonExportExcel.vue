<script setup lang="ts">
import { toRaw } from 'vue';
import { json2Excel } from '@/assets/utils';

const props = defineProps({
  title: {
    type: String,
    default: () => 'file name'
  },
  jsonData: {
    type: Array,
    default: () => []
  },
  fields: {
    type: Object,
    default: () => {}
  }
});
const { jsonData, fields, title } = toRaw(props);
const handleClick = () => {
  json2Excel(jsonData, fields, title);
};
</script>
<script lang="ts">
export default {
  name: 'JsonExportExcel' // 插件名称
};
</script>

<template>
  <button class="muk-btn primary" @click="handleClick">download</button>
</template>

<style scoped>
.muk-btn {
  appearance: none;
  border: none;
  outline: none;
  background: #fff;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
}

.large {
  width: 240px;
  height: 50px;
  font-size: 16px;
}

.moddle {
  width: 180px;
  height: 50px;
  font-size: 16px;
}

.small {
  width: 100px;
  height: 32px;
}

.mini {
  width: 60px;
  height: 32px;
}

.default {
  border-color: #e4e4e4;
  color: #666;
}

.primary {
  border-color: rgb(104, 72, 199);
  background: rgb(120, 97, 183);
  color: #fff;
}

.plain {
  border-color: skyblue;
  color: skyblue;
  background: lighten(skyblue, 50%);
}

.gray {
  border-color: #ccc;
  background: #ccc;
  color: #fff;
}
</style>
