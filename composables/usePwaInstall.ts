// composables/usePwaInstall.ts
import { ref } from 'vue'

export function usePwaInstall() {
  const deferredPrompt = ref<Event | null>(null)

  window.addEventListener('beforeinstallprompt', (e: Event) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault()
    // Stash the event so it can be triggered later
    deferredPrompt.value = e
  })

  const promptInstall = async () => {
    if (deferredPrompt.value) {
      // Show the install prompt
      const promptEvent = deferredPrompt.value as any
      promptEvent.prompt()
      // Wait for the user to respond to the prompt
      const { outcome } = await promptEvent.userChoice
      // Clear the deferred prompt variable, since it can only be used once
      deferredPrompt.value = null
      return outcome === 'accepted'
    }
    return false
  }

  return {
    deferredPrompt,
    promptInstall
  }
}
