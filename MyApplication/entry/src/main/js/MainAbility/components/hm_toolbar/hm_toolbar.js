import router from '@ohos.router'
export default {
    props:['currentPage'],
    data:{
        toolbar:[
            {value:'首页',icon:'首页a.png',inActiveIcon:'首页.png',name:'index',path:'pages/index/index'},
            {value:'分类',icon:'分类a.png',inActiveIcon:'分类.png',name:'category',path:'pages/category/category'},
            {value:'购物车',icon:'购物车a.png',inActiveIcon:'购物车.png',name:'cart',path:'pages/shopping_cart/shopping_cart'},
            {value:'我的',icon:'我的a.png',inActiveIcon:'我的.png',name:'login',path:'pages/login/login'},
        ]
    },
    changePage(k){
        let path = this.toolbar[k].path;
        router.push({
            url:path,
        })
    }
}
