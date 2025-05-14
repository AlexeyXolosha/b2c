export function useCategoryTree(data) {
    const activeNode = ref("");

    const categoryTree = computed(() => {
        const items = data.value?.data || [];

        const map = new Map(items.map(item => [item.id, {...item, children: []}]));

        return items.reduce((tree, item) => {
            const current = map.get(item.id);
            const parentId = item.attributes.parentId;
            if (parentId && map.has(parentId)) {
                map.get(parentId).children.push(current);
            } else {
                tree.push(current);
            }
            return tree;
        }, []);
    });

    return {
        activeNode,
        categoryTree,
    };
}
