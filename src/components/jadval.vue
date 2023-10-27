<template>
    <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">N/0</th>
      <th scope="col">Heading</th>
      <th scope="col">Heading</th>
      <th scope="col">Reaating</th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-primary">
      <th scope="row">1</th>
      <td>Cell</td>
      <td>Cell</td>
      <td> <n-progress :percentage="90"/></td>
    </tr>
    <tr class="table-secondary">
      <th scope="row">2</th>
      <td>Cell</td>
      <td>Cell</td>
      <td> <n-progress :percentage="90"/></td>
    </tr>
    <tr class="table-success">
      <th scope="row">3</th>
      <td>Cell</td>
      <td>Cell</td>
      <td> <n-progress :percentage="90"/></td>
    </tr>
    <tr class="table-danger">
      <th scope="row">4</th>
      <td>Cell</td>
      <td>Cell</td>
      <td> <n-progress :percentage="90"/></td>
    </tr>
    <tr class="table-warning">
      <th scope="row">5</th>
      <td>Cell</td>
      <td>Cell</td>
      <td> <n-progress :percentage="90"/></td>
    </tr>
    <tr class="table-info">
      <th scope="row">6</th>
      <td>Cell</td>
      <td>Cell</td>
      <td> <n-progress :percentage="90"/></td>
    </tr>
    <tr class="table-light">
      <th scope="row">7</th>
      <td>Cell</td>
      <td>Cell</td>
      <td> <n-progress :percentage="90"/></td>
    </tr>
  
  </tbody>
</table>
    </div>
</template>

<script setup>

</script>

<style   scoped>
th:nth-child(1){
font-size: 1.1rem;
color: #303F9F;
font-weight: 700;
font-family:  sans-serif;
}

</style>