import { defineStore } from "pinia";


export const useCategoryStore = defineStore ("category", () => {
    const categories = [
        'Желтые1',
        'Желтые2',
        'Желтые3',
        'Желтые4',
    ];

    return {
        categories,
    }
});