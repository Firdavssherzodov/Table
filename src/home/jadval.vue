<template>
    <div>
        <div class="table-responsive">
  <table class="table table-striped table-borderless table-sm table-secondary border-primary">
    <thead>
      <tr >
        <th scope="col">#</th>
        <th scope="col">Lorem</th>
        <th scope="col">Ipsum</th>
        <th scope="col">Dolor</th>
      </tr>
    </thead>
    <tbody>

      <tr>
        <th>1</th>
  <n-progress
    :percentage="100"
    :indicator-placement="'inside'"
    processing
    class="position-absolute h-25" style="z-index: -1; "
  />
        <td >Sissst</td>
        <td>Amet</td>
      </tr>
      <tr >
        <th scope="row">2</th>
        <td>Adipisicing</td>
        <td>Elit</td>
        <td>Sint</td>
      </tr>
      <tr>
        <th scope="col">3</th>
        <td>Hic</td>
        <td>Fugiat</td>
        <td>Temporibus</td>
      </tr>
    </tbody>

  </table>
</div>
    </div>



</template>

<script setup>

</script>

<style  scoped>
.table>:not(caption)>*>* {
 box-shadow: none !important;
 background: none !important;
}
.table>tbody,td{
  box-shadow: none !important;
  }

</style>