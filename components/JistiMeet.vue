<template>
    <section class="bg-white lg:flex">
        <div ref="jitsiMeetContainer" action="#" class="lg:w-1/2 h-screen"></div>
        <div class="lg:w-1/2 h-screen hidden lg:block">
            <img src="@/assets/img/conference.jpg" class="h-screen object-cover object-center" />
        </div>
    </section>
</template>

<script>
export default {
    mounted() {
        // Load the Jitsi Meet API script dynamically
        const script = document.createElement('script');
        script.src = 'https://meet.jit.si/external_api.js';
        script.async = true;
        script.onload = this.initializeJitsiMeet;
        document.body.appendChild(script);
    },
    methods: {
        initializeJitsiMeet() {
            // Ensure JitsiMeetExternalAPI is available
            if (window.JitsiMeetExternalAPI) {
                // Initialize Jitsi Meet with your configuration
                const domain = 'meet.jit.si';
                const options = {
                    roomName: 'Stress-free Weight Loss Group Coaching',
                    parentNode: this.$refs.jitsiMeetContainer,
                    noSSL: false,
                    userInfo: {
                        email: "user@email.com",
                        displayName: ""
                    },
                    devices: {
                        audioInput: '<deviceLabel>',
                        audioOutput: '<deviceLabel>',
                        videoInput: '<deviceLabel>'
                    },
                    configOverwrite: {
                        enableNoisyMicDetection: false
                    },
                    interfaceConfigOverwrite: {
                        SHOW_JITSI_WATERMARK: false,
                        SHOW_WATERMARK_FOR_GUESTS: false,
                        SHOW_CHROME_EXTENSION_BANNER: false
                    },
                    onload: this.onIFrameLoad
                };
                const api = new window.JitsiMeetExternalAPI(domain, options);
            } else {
                console.error('Jitsi Meet API not available');
            }
        }
    }
}
</script>