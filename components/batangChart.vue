<template>
  <v-container>
    <BarChart :chartData="testData" />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BarChart } from "vue-chart-3";

export default defineComponent({
  name: "Home",
  components: { BarChart },
  setup() {
    const testData = {
      labels: ["Jan", "feb", "mar", "apr", "may", "jul"],
      datasets: [
        {
          label: "Penjualan",
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
          ],
        },
      ],
    };

    return { testData };
  },
});
</script>
