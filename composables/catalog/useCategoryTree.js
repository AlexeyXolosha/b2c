export function useCategoryTree() {

    const actinveNode = ref("");

    const chapter = computed(() => (data.value?.data?.filter(el => !el.attributes.parentId) || []));
}