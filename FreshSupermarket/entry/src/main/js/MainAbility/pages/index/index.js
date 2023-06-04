import ajax from '../../common/js/ajax'
import router from '@ohos.router'
export default {
    data: {
        AllMenu:[],
        image_swiper:[
            {path:"/image/1.png"},
            {path:"/image/1.png"},
            {path:"/image/1.png"},],
        good_classify1:[],
        good_classify2:[],
        more_classify:[],
        discount_goods:[
            [   {price_new:"3.58",price_old:"4.98",img_path:"/image/a.png"},
                {price_new:"38.8",price_old:"49.9",img_path:"/image/b.png"},
                {price_new:"3.9",price_old:"8.5",img_path:"/image/c.png"},
                {price_new:"14.8",price_old:"30",img_path:"/image/d.png"},
            ],
        ]
    },

    onInit() {
        this.getAllMenu();
        this.getSwiper();
    },
    getAllMenu(){
        ajax.get({
            url:'http://124.71.79.186:8081/menu/findNav',
            success:resp=>{
                this.good_classify1= resp.data.slice(0,5)
                this.good_classify2= resp.data.slice(5,10)
                this.more_classify= resp.data.slice(10)
            }
        })
    },
    getSwiper(){
        ajax.get({
            url:'http://124.71.79.186:8081/swiper/getList',
            success:resp=>{
                this.image_swiper= resp.data
            }
        })
    },
    toShopCategory(typeId){
        router.push({
            url:'pages/category/category',
            params:{typeId}
        })
    }
}



