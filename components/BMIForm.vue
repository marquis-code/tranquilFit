<template>
  <div class="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
    <form @submit.prevent="onSubmit" class="space-y-4">
      <div>
        <label for="weight" class="block text-sm font-medium text-gray-700">Weight (kg):</label>
        <input id="weight" v-model="bmiData.weight.value" type="text" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <div>
        <label for="height" class="block text-sm font-medium text-gray-700">Height (cm):</label>
        <input id="height" v-model="bmiData.height.value" type="text" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <div>
        <label for="sex" class="block text-sm font-medium text-gray-700">Sex:</label>
        <input id="sex" v-model="bmiData.sex" type="text" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <div>
        <label for="age" class="block text-sm font-medium text-gray-700">Age:</label>
        <input id="age" v-model="bmiData.age" type="text" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <div>
        <label for="waist" class="block text-sm font-medium text-gray-700">Waist (cm):</label>
        <input id="waist" v-model="bmiData.waist" type="text" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <div>
        <label for="hip" class="block text-sm font-medium text-gray-700">Hip (cm):</label>
        <input id="hip" v-model="bmiData.hip" type="text" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <button type="submit" class="w-full bg-indigo-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Calculate BMI
      </button>
    </form>

    <div v-if="loading" class="mt-4 text-center text-gray-500">Loading...</div>
    <div v-if="error" class="mt-4 text-center text-red-500">Error: {{ error }}</div>
    <div v-if="result" class="mt-4">
      <h3 class="text-lg font-medium text-gray-900">BMI Result:</h3>
      <pre class="mt-2 p-4 bg-gray-100 rounded-md">{{ result }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { useBmiApi } from '@/composables/assessment/useBmi';

export default defineComponent({
  setup() {
    const { calculateBmi, loading, result, error } = useBmiApi();

    const bmiData = reactive({
      weight: { value: '', unit: 'kg' },
      height: { value: '', unit: 'cm' },
      sex: '',
      age: '',
      waist: '',
      hip: ''
    });

    const onSubmit = () => {
      calculateBmi(bmiData);
    };

    return {
      bmiData,
      calculateBmi,
      loading,
      result,
      error,
      onSubmit
    };
  }
});
</script>
