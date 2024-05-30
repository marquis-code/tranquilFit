const route = useRoute()
const router = useRouter()
export const useAssessment = () => {
  const processing = ref(false);
  const openSuccessModal = ref(false)
  const credentials = ref({
    fullName: "",
    phone: "",
    gender: "",
    age: "",
    email: "",
    currentWeight: "",
    targetWeight: "",
    currentHeight: "",
    waistCircumference: "",
  });

  const handleAssessment = () => {
    processing.value = true
    setTimeout(() => {
        processing.value = false
        openSuccessModal.value = true
    }, 2000)
  };

  const isFirstFormEmpty = computed(() => {
    return !!(credentials.value.fullName && credentials.value.phone && credentials.value.gender && credentials.value.age && credentials.value.email)
  })

  const isSecondFormEmpty = computed(() => {
    return !!(credentials.value.currentWeight && credentials.value.targetWeight && credentials.value.currentHeight && credentials.value.waistCircumference)
  })

  return { credentials, handleAssessment, processing, isFirstFormEmpty, isSecondFormEmpty, openSuccessModal };
};
