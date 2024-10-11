<!-- components/SensorChart.vue -->
<template>
  <div>
    <canvas ref="sensorChart"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

// Chart.js 등록
Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

const sensorChart = ref(null);
let chartInstance: Chart | null = null;
let intervalId: number | null = null;

// 임의의 센서 데이터 생성 함수
const generateSensorData = () => Math.floor(Math.random() * 100);

onMounted(() => {
  const ctx = (sensorChart.value as HTMLCanvasElement).getContext('2d');

  // 차트 초기화
  chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [], // X축 라벨 (시간)
      datasets: [{
        label: '센서 데이터',
        data: [], // 센서 데이터
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      }]
    },
    options: {
      scales: {
        x: {
          type: 'category',
          title: {
            display: true,
            text: '시간'
          }
        },
        y: {
          title: {
            display: true,
            text: '값'
          }
        }
      }
    }
  });

  // 10초마다 데이터 업데이트
  intervalId = window.setInterval(() => {
    const newTime = new Date().toLocaleTimeString(); // 현재 시간
    const newValue = generateSensorData(); // 센서 데이터 생성

    if (chartInstance) {
      chartInstance.data.labels?.push(newTime);
      chartInstance.data.datasets[0].data.push(newValue);

      // 데이터가 너무 많아지면 오래된 데이터를 제거
      if (chartInstance.data.labels.length > 10) {
        chartInstance.data.labels.shift();
        chartInstance.data.datasets[0].data.shift();
      }

      chartInstance.update(); // 차트 업데이트
    }
  }, 10000); // 10초마다 갱신
});

onBeforeUnmount(() => {
  // 컴포넌트가 언마운트되면 타이머 정리
  if (intervalId) {
    clearInterval(intervalId);
  }
  if (chartInstance) {
    chartInstance.destroy();
  }
});
</script>

<style scoped>
canvas {
  max-width: 100%;
  height: 400px;
}
</style>
