<template>
    <n-scrollbar x-scrollable>

  <div class="white-space: nowrap;"  >
    <table class="table">
      <thead>
        <tr>
          <th scope="col" class="fw-bold text-dark">№</th>
          <th scope="col" class="fw-bold">Name</th>
          <th scope="col" class="fw-bold">Group</th>
          <th scope="col" class="fw-bold"> wpm</th>
          <th scope="col" class="fw-bold">consistency</th>
          <th scope="col" class="fw-bold">Accuracy</th>
        </tr>
      </thead>
      <tbody v-for="(srt,index) in data" :key="index">
        <tr class="table-primary">
          <td scope="col" class="fw-bold text-dark">{{  index += 1 }}</td>
          <td scope="col" class="fst-normal fw-bold name">{{ srt.last_name }} {{ srt.firt_name  }}</td>
          <td class="fw-bold">" {{ srt.group }} "</td>
          <td scope="col">{{ srt.wpm }}%</td>
          <td scope="col">{{ srt.consistency }} %</td>

          <td><n-progress :percentage="srt.accuracy " /></td>
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
    if (resp.status === 200 ) 
    
     data.value = resp.data
     
     console.log(data.value = resp.data);
    
})
}

getData();


setInterval(()=>{
  getData();
},10000)
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
