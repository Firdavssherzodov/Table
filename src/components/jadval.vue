<template>
    <n-scrollbar x-scrollable>

  <div class="white-space: nowrap;">
    <table class="table" data-mdb-loading="true" borderless: true >
      <thead>
        <tr>
          <th scope="col" class="fw-bold">Name</th>
          <th scope="col" class="fw-bold">Group</th>
          <th scope="col" class="fw-bold">Accuracy</th>
          <th scope="col" class="fw-bold">consistency</th>
          <th scope="col" class="fw-bold">wpm</th>
        </tr>
      </thead>
      <tbody v-for="srt in data" :key="srt">
        <tr class="table-primary">
          <td scope="col" class="fst-normal fw-bold name">{{ srt.last_name }} {{ srt.firt_name  }}</td>
          <td class="fw-bold">" {{ srt.group }} "</td>
          <td>{{ srt.accuracy }} %</td>
          <td>{{ srt.consistency }} %</td>

          <td><n-progress :percentage="srt.wpm" /></td>
        </tr>
      </tbody>
    </table>
  </div>
  </n-scrollbar>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

let data = ref([]);

function getData() {
  axios.get('https://djumanov.pythonanywhere.com/results/')
  .then( resp =>{
    if (resp.status === 200) 
     data.value = resp.data

     console.log(data.value = resp.data);
    
})
}
getData();

// 'https://djumanov.pythonanywhere.com/results/'
</script>

<style scoped>
th:nth-child(1) {
  font-size: 1rem;
  color: #303f9f;
  font-family: sans-serif;
}
.name{
  color: #303f9f;
}
</style>
