import { defineStore } from "pinia";
import {computed, ref} from 'vue';

 export const useProductStore=defineStore('product',()=>{
    const products = ref ([
        {
            id:1,
            name: 'Банан 1',
            img:'https://avatars.mds.yandex.net/i?id=f610b1c979bc4f12ef38170ee66ef41e_l-5086971-images-thumbs&n=13.jpg',
            price:1000,
            category: "Желтые1",
            discription: 'Банан',
            publish_at: '27.11.2024'
        },
        {
            id:2,
            name: 'Банан 2',
            img:'https://thumbs.dreamstime.com/b/unripe-banana-white-background-unripe-banana-isolated-white-background-104688636.jpg',
            price:1100,
            category: "Желтые2",
            discription: 'Второй Банан',
            publish_at: '27.11.2024'
        },
        {
            id:3,
            name: 'Банан 3',
            img:'https://sc04.alicdn.com/kf/Uea012d5e2c6c44c698881719b0ed1b7al.jpg',
            price:1200,
            category: "Желтые3",
            discription: 'Третий Банан',
            publish_at: '27.11.2024'
        },
        {
            id:4,
            name: 'Банан 4',
            img:'https://avatars.mds.yandex.net/i?id=43b8f285e25e4f9c943e2d4d350b12f2_l-4557470-images-thumbs&n=13',
            price:1500,
            category: "Желтые4",
            discription: 'Четвертый Банан',
            publish_at: '27.11.2024'
        }
    
    ]);

const productsFilterByCategoryName = computed(()=>{
    return (category, searchText) => {
        if (category) {
            return products.value.filter((product)=>product.category === category);
        }
        if (searchText) {
            return products.value.filter((product)=>product.name.includes(searchText));
        }
        return products.value;
    }
});

return{
    products, productsFilterByCategoryName
}
});