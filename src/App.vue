<script setup lang="ts">
import { ref } from 'vue';
import typescriptLogo from './typescript.svg';

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

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="./vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img
        :src="`${typescriptLogo}`"
        class="logo vanilla"
        alt="TypeScript logo"
      />
    </a>
    <excel-export-json size="large" @change="handleChange"></excel-export-json>
    <JsonExportExcel
      :json-data="jsonData"
      :fields="headerName"
      :title="title"
    ></JsonExportExcel>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
</template>
