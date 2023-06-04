import goods from '../details/details';
import ajax from '../../common/js/ajax';
import router from '@ohos.router'
import data_storage from '@ohos.data.storage';
import featureAbility from '@ohos.ability.featureAbility';
export default {
    data: {
        goods:[
            {goodsId:0,
            title:"洁柔粉Face百花香味纸面巾",
            mainImg:"https://imgs.pupuapi.com/STORE_PRODUCT/2ca0b573c8a54977b23ba981063add56/1640594534879.gif",
            nowPrice:49.9,
            num:2,
            checked:true},
            {goodsId:1,
            title:"红颜草莓300g±10g/盒",
            mainImg:"https://imgs.pupuapi.com/STORE_PRODUCT/a241ea1579eb4958a291b398e20768b8/1647835565054.png?x-oss-process=image/format,jpg,image/resize,h_720/watermark,image_U0NFTkVTX0JBTk5FUi8wYjllYzJjYmU3OWQ0OWE3OGY5MmQ5M2UzN2JmYTMzNy8yMmFmZDAxZGFmNTFhOTQ3MDk0N2JlMjBmYmQzYWMxNi5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8xMDA,t_100,g_center,x_0,y_0#",
            nowPrice:39.9,
            num:1,
            checked:true}
        ],
    },
    onInit() {
//        this.good = router.getParams()?.['goods'];
//        this.goods.push(this.goods)

        console.log("···········this.goods············")
        console.log(JSON.stringify(this.goods))
        console.log("···········this.goods·············")
    },
    computed:{
        totalPrice(){
            let p = 0;
            this.goods.forEach(v=>{
                if(v.checked){
                    p+= v.nowPrice * v.num;
                }
            })
            return p;
        }
    },
    changeChecked(e){
        let d = e.detail;
        let index = this.goods.findIndex(v=>v.id === d.id);
        if(index >= 0 && this.goods.length){
            this.goods[index].checked=d.result;
        }
    },
    changeNum(e){
        let d = e.detail;
        let index = this.goods.findIndex(v=>v.id === d.id);
        if(index >= 0 && this.goods.length){
            this.goods[index].num=d.num;
        }
    },
    changeInc(e){
        let d = e.detail;
        let index = this.goods.findIndex(v=>v.id === d.id);
        if(index >= 0 && this.goods.length){
            this.goods[index].num=d.num;
        }
    },
    selectAll(e){
        let r=e.checked;
        this.goods.forEach(v=>v.checked = r);
    }
}
