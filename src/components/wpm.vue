<template>
    <header1/>
    <n-scrollbar x-scrollable>
      <div class="white-space: nowrap;">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" class="fw-bold text-dark">№</th>
              <th scope="col" class="fw-bold">Name</th>
              <th scope="col" class="fw-bold">Group</th>
              <th scope="col" class="fw-bold">
              <router-link to="/wpm">wpm</router-link>
            </th>

            <th scope="col" class="fw-bold">
              <router-link to="/consistency" class="text-dark">Consistency</router-link>
            </th>

            <th scope="col" class="fw-bold">
              <router-link to="/accuracy" class="text-dark">Accuracy</router-link>
            </th>  
              
            </tr>
          </thead>
          <tbody v-for="(srt, index) in data" :key="index">
            <tr class="table-primary">
              <td scope="col" class="fw-bold text-dark">{{ (index += 1) }}</td>
              <td scope="col" class="fst-normal fw-bold name">
                {{ srt.last_name }} {{ srt.firt_name }}
              </td>
              <td scope="col" class="fw-bold">{{ srt.group }}</td>
              <td scope="col">{{ srt.wpm }}</td>
              <td scope="col"> {{ srt.consistency }} </td>
              <td><n-progress :percentage="srt.accuracy" processing /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </n-scrollbar>
  </template>
  
  <script setup>
  import header1 from '../components/header.vue'
  import axios from "axios";
  import { ref } from "vue";
  
  let data = ref([]);
  
  function getData() {
    axios.get("https://djumanov.pythonanywhere.com/results/").then((resp) => {
      if (resp.status === 200) data.value = resp.data;
  
      data.value.sort((first, second) => {
        if (first.wpm > second.wpm) return -1;
        if (first.wpm < second.wpm) return 1;
        return 0;
      });
  
      console.log((data.value = resp.data));
    });
  }
  
  getData();
  
  setInterval(() => {
    getData();
  }, 60000);
  
  // 'https://djumanov.pythonanywhere.com/results/'
  </script>
  
  <style scoped>
  th:nth-child(1) {
    font-size: 1rem;
    color: #303f9f;
    font-family: sans-serif;
  }
  .name {
    color: #303f9f;
  }
  </style>
  