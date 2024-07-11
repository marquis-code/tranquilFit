export default {
  ssr: false,
  target: "static",
  app: {
    head: {
      script: [
        { src: "https://sandbox.web.squarecdn.com/v1/square.js" },
      ],
      title: "Stress Free Weight Loss",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
    },
  },
  plugins: ["~/plugins/aos.client.ts"],
  modules: ["@nuxtjs/tailwindcss", "@vite-pwa/nuxt"],
  css: ["/assets/css/main.css"],
  tailwindcss: {
    cssPath: "@/assets/css/main.css",
  },
  pageTransition: {
    name: "slide",
    mode: "out-in",
  },
  axios: {
    // Axios options here
    proxy: true,
    timeout: 10000, // Example: set timeout to 10 seconds
  },
  pwa: {
    manifest: {
      name: "Stress Free Weight Loss",
      short_name: "Stress Free Weight Loss",
      description:
        "Discover a stress-free and healthy approach to weight loss with our personalized coaching program. Achieve your weight loss goals and maintain a healthy lifestyle for life.",
      lang: "en",
      display: "standalone",
      start_url: "/",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      icons: [
        {
          src: "/icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      // Workbox options for caching strategies, runtime caching, etc.
    },
  },
  publicRuntimeConfig: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
  },
  privateRuntimeConfig: {
    squadCoApiKey: process.env.SQUAD_CO_API_KEY,
  },
  http: {
    // You can optionally add default options here
  },
  // buildModules: [
  //   '@nuxtjs/moment'
  // ]
  // alias: {
  // 	'@': '/'
  // },
};
