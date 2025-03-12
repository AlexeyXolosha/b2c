import { useDeviceController } from '~/store/device-controller';

export default defineNuxtPlugin((nuxtApp) => {
    const deviceController = useDeviceController();

    const headers = process.server ? useRequestHeaders() : null;

    deviceController.detectDevice(headers);
});
