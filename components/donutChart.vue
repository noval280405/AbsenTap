<template>
  <v-container>
    <v-row>
      <v-col>
        <DoughnutChart :chartData="testData" />

      </v-col>
      <v-col>
        
      </v-col>
    </v-row>

  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { DoughnutChart } from 'vue-chart-3';


export default defineComponent({
  name: 'Home',
  components: { DoughnutChart },
  setup() {
    const testData = {
      labels: ['Kas Masuk',  'Biaya Operasional', ],
      datasets: [
        {
          data: [140000000, 50000000],
          backgroundColor: ['blue', 'red'],
        },
      ],
    };

    return { testData };
  },
});
</script>