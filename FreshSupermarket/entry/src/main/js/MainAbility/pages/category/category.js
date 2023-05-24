import ajax from '../../common/js/ajax'
import router from '@ohos.router'
export default {
    data: {
        OneMenu:[],
        TwoMenu:[],
        id:2,
        inActiveId:2,
    },
    onInit() {
        this.getOneMenu();

    },
    getOneMenu(){
        ajax.get({
            url:'http://124.71.79.186:8081/menu/findNav',
            success:resp=>{
                this.OneMenu = resp.data;
                this.inActiveId=this.OneMenu.id;
                let cid=this.id;
                console.log(this.OneMenu[0].id)
                this.getTwoMenu(cid);
            }
        })
    },
    getTwoMenu(cid){
        ajax.get({
            url:'http://124.71.79.186:8081/menu/findNav?id='+cid,
            success:resp=>{
                this.TwoMenu = resp.data;
//                console.log(cid)
//                console.log(this.TwoMenu)
            }
        })
    },
}
