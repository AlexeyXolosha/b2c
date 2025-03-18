import { useDeviceController } from "~/store/device-controller.js";

export function useLoaderComponent({ namespace, group }) {
    const deviceController = useDeviceController();
    const deviceType = computed(() => (deviceController.isMobile ? "mobile" : "desktop"));

    const components = import.meta.glob("~/components/**/*.vue");

    return computed(() => {
        if (!namespace) return null;

        const groupPath = group ? `/${group}` : "";
        const filePath = `/components/${namespace}/templates${groupPath}/${deviceType.value}.vue`;

        const matchedKey = Object.keys(components).find((key) => key.endsWith(filePath));

        if (matchedKey) {
            return defineAsyncComponent(components[matchedKey]);
        } else {
            console.error(`Компонент ${filePath} не найден`);
            return null;
        }
    });
}
