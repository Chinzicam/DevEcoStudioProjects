import ajax from '../../common/js/ajax';
import router from '@ohos.router'
import data_storage from '@ohos.data.storage';
import featureAbility from '@ohos.ability.featureAbility';
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
    addShop(){
        var context = featureAbility.getContext();
        context.getFilesDir().then((filePath) => {
            let storage = data_storage.getStorageSync(filePath + '/mystore')
            storage.putSync("goods", "shopInfo")
            storage.flushSync()


            let value = storage.getSync("goods","默认值")
            console.info("The value of startup is " + value)
        });
    },
}
