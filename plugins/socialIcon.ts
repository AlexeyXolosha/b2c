export default defineNuxtPlugin(() => {
    const iconMap: Record<string, string> = {
        youtube: 'fa-brands fa-youtube',
        twitter: 'fa-brands fa-x-twitter',
        telegram: 'fa-brands fa-telegram',
        facebook: 'fa-brands fa-facebook-f',
        whatsapp: 'fa-brands fa-whatsapp',
        instagram: 'fa-brands fa-instagram',
    };

    const getIconClass = (name: string): string => {
        return iconMap[name.toLowerCase()] || 'fa-solid fa-question';
    };

    return {
        provide: {
            iconClass: getIconClass,
        },
    };
})