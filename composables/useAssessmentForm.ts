export const useAssessmentForm = () => {
    const processing = ref(false)
    const formData = ref({
        fullName: '',
        phone: '',
        gender: '',
        age: '',
        email: '',
        currentWeight: '',
        targetWeight: '',
        currentHeight: '',
        waistCircumference: ''
    })

    const checkFitness = () => {
      setTimeout(() => {
        processing.value = false
        useNuxtApp().$toast.success("Congratulations ${formData.value.fullName}. You are ", {
            autoClose: 5000,
            dangerouslyHTMLString: true,
          });
      })
    }

    return { formData, checkFitness, processing }
}