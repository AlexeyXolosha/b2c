import {defineStore} from 'pinia';

export const useDeviceController = defineStore('device-controller', {
    state: () => ({
        isMobile: false,
    }),
    actions: {
        detectDevice() {
            if (process.server) {
                const headers = useRequestHeaders();
                const userAgent = headers['user-agent'] || '';
                this.isMobile = /mobile|android|iphone|ipad|ipod/i.test(userAgent);
            } else {
                this.isMobile = window.innerWidth <= 768
            }
        }
    }
})
