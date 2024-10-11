<!-- pages/dashboard.vue -->
<template>
  <div class="dashboard">
    <h1>대시보드</h1>
    <p>10초마다 업데이트되는 센서 데이터를 실시간으로 확인하세요.</p>
    <SensorChart />
  </div>
</template>

<script setup lang="ts">
import SensorChart from '~/components/SensorChart.vue';
</script>

<style scoped>
.dashboard {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
}

p {
  margin-bottom: 40px;
}
</style>
