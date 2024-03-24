export default defineNuxtRouteMiddleware((to, from) => {
    // Your middleware logic here, e.g., check for authentication
    const isAuthenticated = true; // Determine authentication status
  
    if (!isAuthenticated && to.path !== '/login') {
      return navigateTo('/login');
    }
  });