<template>
    <!-- Header -->
    <div class="card">
    <!-- Image and text -->
    <nav class="navbar navbar-light bg-secondary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <!-- src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp" -->
          <img
            src="../../image/photo_2023-10-29_00-30-09 (1).png"
            class="me-2"
            height="50"
            alt="MDB Logo"
            loading="lazy"
          />

          <small class="smal" style="color: #ffffff">Turon IT academy Admin</small>
        </a>
      </div>
      <router-link to="/"></router-link>

    </nav>
  </div>

    <!-- Table -->
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
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody v-for="(srt,index) in data" :key="index">
        <tr class="table-success">
          <td scope="col" class="fw-bold text-dark">{{  index += 1 }}</td>
          <td scope="col" class="fst-normal fw-bold name">{{ srt.last_name }} {{ srt.firt_name  }}</td>
          <td class="fw-bold">" {{ srt.group }} "</td>
          <td scope="col">{{ srt.wpm }}</td>
          <td scope="col">{{ srt.consistency }} %</td>
          <td><n-progress :percentage="srt.accuracy " processing/></td>
          <td scope="col">
            <button type="button" class="btn btn-danger btn-lx btn-floating"  >
  <i class="fas fa-trash-can"></i>
</button></td>
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
 
 /* header */
 .smal{
    font-weight: 600 !important;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>
