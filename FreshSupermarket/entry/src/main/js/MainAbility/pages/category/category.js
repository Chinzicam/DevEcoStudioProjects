import ajax from '../../common/js/ajax'
import router from '@ohos.router'
export default {
    data: {
        OneMenu:[],
        TwoMenu:[],
        id:0,
        inActiveId:1,
        inActiveId2:0,
        shopList:[]
    },
    onInit() {
        this.getOneMenu();
    },
    getOneMenu(){
        ajax.get({
            url:'http://124.71.79.186:8081/menu/findNav',
            success:resp=>{
                this.OneMenu = resp.data;
                this.inActiveId=this.OneMenu[0].id;
                let cid=this.id;
                this.getTwoMenu(1);
                this.getShopList(22)
            }
        })
    },
    getTwoMenu(cid){
        ajax.get({
            url:'http://124.71.79.186:8081/menu/findNav?id=' + cid,
            success:resp=>{
                this.TwoMenu = resp.data;
                console.log(JSON.stringify(this.TwoMenu))
            }
        })
    },
    getShopList(cid){
        ajax.get({
            url:'http://124.71.79.186:8081/commodity/findByType?typeId=' + cid,
            success:resp=>{
                this.shopList = resp.data;
//                console.log(JSON.stringify(this.shopList))
            }
        })
    },
    changeOneCategory(id){
        this.inActiveId = id;
        let cid=this.inActiveId;
        this.getShopList(cid+21)
        this.getTwoMenu(cid);
//        console.log(cid+"上面")
//        console.log(JSON.stringify(this.TwoMenu))
    },
    changeTwoCategory(id){
        this.inActiveId2 = id;
        this.getShopList(id)
//        console.log(id+"左边")
    },
    toShopDetail(goodsId){//转到详情页面
        router.push({
            url:'pages/details/details',
            params:{goodsId}
        })
    },
}
