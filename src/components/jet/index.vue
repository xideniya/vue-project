<template>
  <div>jet组件部分</div>
  <div ref="container" class="pic"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import * as echarts from "echarts";
const container = ref();

onMounted(() => {
  // 绘制图表
  let myChart = echarts.init(container.value);
  myChart.setOption({
    title: {
      text: "流量占比",
      x: "center",
      textStyle: {
        fontSize: 20,
      },
      subtextStyle: {
        lineHeight: 56,
      },
      top: "auto",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "10%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
      },
    ],
  });
});
</script>

<style scoped>
.pic {
  width: 400px;
  height: 350px;
}
</style>
