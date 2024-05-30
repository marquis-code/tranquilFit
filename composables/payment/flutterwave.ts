import { useFlutterwave } from "flutterwave-vue3";
import { useLogin } from "@/composables/auth/login";
import logo from "@/assets/img/logo.png";

const router = useRouter()
export const useFlutterwaveSDK = () => {
  const user = {
    firstname: 'John',
    lastname: 'Doe',
    email: 'john@gmail.com',
    phone: '09012345678'
  }
  const paymentForm = ref({
    amount: "" as any,
  });
  const loading = ref(false);
  const computedUsername = computed(() => {
    return `${user.firstname} ${user.lastname}`;
  });

  const handlePayment = () => {
    loading.value = true;
    useFlutterwave({
      amount: Number(paymentForm.value.amount),
      callback(data: any): void {
        // console.log(data);
        window.location.href = '/user-dashboard'
      },
      country: "NG",
      currency: "NGN",
      customer: {
        email: user.email,
        name: computedUsername.value,
        phone_number: user.phone,
      },
      customizations: {
        description: "Pay with StressFreeWeightLossCoaching",
        logo: logo,
        title: "StressFreeWeightLossCoaching",
      },
      meta: {
        user_id: 1,
        token: "jdjdjdjdjd",
      },
      onclose(): void {},
      payment_options: "card",
      public_key: import.meta.env.VITE_FLW_PUBLIC_KEY,
      redirect_url: undefined,
      tx_ref: "tx_ref_herer_h92hjyj3",
    });
  };

  const setAmount = (amount: number) => {
    paymentForm.value.amount = amount; 
  }

  return { handlePayment, paymentForm, setAmount };
};
