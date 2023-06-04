import ajax from '../../common/js/ajax';
import router from '@ohos.router'
export default {
    data: {
        shopInfo:[],
        goodsId:1
    },
    onInit() {
        this.getShopInfo()
    },
    getShopInfo(){
        ajax.get({
            url:'http://124.71.79.186:8081/commodity/findGoods?goodsId='+this.goodsId,
            success:resp=>{
                this.shopInfo=resp.data
                console.log(JSON.stringify(this.shopInfo))
            }
        })
    },
    back(){
        router.back();
    },
}
