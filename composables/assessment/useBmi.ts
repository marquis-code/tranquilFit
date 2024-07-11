// src/composables/useBmiApi.ts
import { ref } from 'vue';

interface BmiData {
  weight: { value: string, unit: string };
  height: { value: string, unit: string };
  sex: string;
  age: string;
  waist: string;
  hip: string;
}

export function useBmiApi() {
  const loading = ref(false);
  const result = ref(null);
  const error = ref(null);

  const calculateBmi = async (data: BmiData) => {
    loading.value = true;
    error.value = null;
    result.value = null;

    try {
      const response = await fetch('https://bmi.p.rapidapi.com/v1/bmi', {
        method: 'POST',
        headers: {
          'x-rapidapi-key': 'c01c44a894msh22c008e4abc5915p17cc97jsn2fd589477676',
          'x-rapidapi-host': 'bmi.p.rapidapi.com',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      result.value = await response.json();
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  return { calculateBmi, loading, result, error };
}
