<script setup lang="ts">
import { ref } from 'vue';
import { readFile, workBook, sheetToJson } from '@/assets/utils';

const error = ref('');
/**
 * @param size The optional values for defining the size of a button are 'large' | 'middle' | 'small' | 'mini'
 */
defineProps({
  size: {
    type: String,
    default: 'middle'
  }
});
const emit = defineEmits(['change']);
const handleCheckType = (name: string) => {
  console.log('🚀 ~ handleCheckType ~ name:', name);
  const fileType: any = name.split('.')[1];
  console.log('🚀 ~ handleCheckType ~ fileType:', fileType);
  if (fileType === 'xlsx' || fileType === 'xls') {
    error.value = '';
    return true;
  }
  error.value = 'The File type must be xlsx or xls!';
  return false;
};
const handleChange = async (event: any) => {
  const { target } = event;
  const file = target.files[0] as File;
  const boo = handleCheckType(file.name);
  if (boo) {
    console.log('🚀 ~ file: excelJson.vue:19 ~ handleChange ~ file:', file);
    const result: any = await readFile(file);
    const resultBook = workBook(result);
    const workSheet = resultBook.Sheets[resultBook.SheetNames[0]];
    const data = sheetToJson(workSheet);
    emit('change', data);
  }
};
/* const handleClick = async () => {
  const f = document.getElementById('fileInput') as any;
  console.log('🚀 ~ file: excelJson.vue:21 ~ handleClick ~ f:', f);
  if (f) {
    const file = f.files[0];
    console.log('🚀 ~ file: excelJson.vue:24 ~ handleClick ~ file:', file);
    const result = await readFile(file);
    console.log('🚀 ~ file: excelJson.vue:21 ~ handleChange ~ result:', result);
    const workBook = read(result, { type: 'binary', cellDates: true });
    const workSheet = workBook.Sheets[workBook.SheetNames[0]];
    const data = utils.sheet_to_json(workSheet);
    console.log("🚀 ~ /*handleClick ~ data:", data)
  }
}; */
</script>
<script lang="ts">
export default {
  name: 'ExcelExportJson'
};
</script>

<template>
  <div class="excel-box" :class="[size]">
    <label for="fileInput" class="input-label" title="select file">
      <div class="input-label-text">
        <img src="/update.svg" alt="update" />
        <div>
          <span>xlsx,xls</span>
        </div>
      </div>
    </label>
    <input
      id="fileInput"
      type="file"
      style="display: none"
      @change="handleChange"
    />
    <span v-show="error" class="excel-box-error">{{ error }}</span>
  </div>
</template>
<style scoped lang="scss">
.excel-box {
  display: inline-block;
  width: 150px;
  height: 150px;
  position: relative;
  .input-label {
    width: 100%;
    height: 100%;
    display: flex;
    border: 1px solid gray;
    background-color: rgba($color: #f9eded7e, $alpha: 0.5);
    border-radius: 10px;
    cursor: pointer;
    color: #333;
    font-size: 12px;
    justify-content: center;
    align-items: center;
  }
  &.large {
    width: 200px;
    height: 200px;
  }
  &.middle {
    width: 150px;
    height: 150px;
  }
  &.small {
    width: 100px;
    height: 100px;
  }
  &.mini {
    width: 50px;
    height: 50px;
  }
  &-error {
    position: absolute;
    font-size: 12px;
    left: 0;
    bottom: -20px;
    color: #f01010;
  }
}
</style>
../assets/utils
