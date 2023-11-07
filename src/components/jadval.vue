<template>
  <n-scrollbar x-scrollable>
    <div class="white-space: nowrap;">
      <table class="table">
        <thead>
          <tr>
            <th scope="col" class="fw-bold text-dark">№</th>
            <th scope="col" class="fw-bold text-dark">Name</th>
            <th scope="col" class="fw-bold text-dark">Group</th>

            <th scope="col" class="fw-bold Wpm" @click="Wpm">Wpm</th>

            <th scope="col" class="fw-bold Consistency" @click="Consistency">
              Consistency
            </th>

            <th scope="col" class="fw-bold Accuracy" @click="Accuracy">
              Accuracy
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
            <td scope="col">{{ srt.consistency }} %</td>

            <td><n-progress :percentage="srt.accuracy" processing /></td>
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
  axios.get("https://djumanov.pythonanywhere.com/results/").then((resp) => {
    if (resp.status === 200) data.value = resp.data;

    data.value.sort((first, second) => {
      if (first.consistency > second.consistency) return -1;
      if (first.consistency < second.consistency) return 1;
      return 0;
    });
  });
}

getData();

setInterval(() => {
  getData();
}, 60000);

function Consistency() {
  document.querySelector(".Consistency").style.color = "#3B71CA";
  document.querySelector(".Wpm").style.color = "black";
  document.querySelector(".Accuracy").style.color = "black";

  data.value.sort((first, second) => {
    if (first.consistency > second.consistency) return -1;
    if (first.consistency < second.consistency) return 1;
    return 0;
  });
}

function Accuracy() {
  document.querySelector(".Consistency").style.color = "black";
  document.querySelector(".Accuracy").style.color = "#3B71CA";
  document.querySelector(".Wpm").classList.add("text-black");
  data.value.sort((first, second) => {
    if (first.accuracy > second.accuracy) return -1;
    if (first.accuracy < second.accuracy) return 1;
    return 0;
  });
}

function Wpm() {
  document.querySelector(".Wpm").classList.remove('text-black');
  document.querySelector(".Consistency").style.color = "black";
  document.querySelector(".Accuracy").style.color = "black";
  document.querySelector(".Wpm").style.color = "#3B71CA";

  data.value.sort((first, second) => {
    if (first.wpm > second.wpm) return -1;
    if (first.wpm < second.wpm) return 1;
    return 0;
  });
}

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
.Consistency,
.Accuracy,
.Wpm:hover {
  cursor: pointer;
}
.Wpm{
color: #3B71CA;
}
</style>
