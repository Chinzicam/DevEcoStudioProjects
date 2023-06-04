import router from '@ohos.router';
import storage from '../../common/js/storage';
export default {
    data: {
        username:"",
    },
    onInit() {
        storage(s=>{
            let username = s.getSync("username",'');
            this.username = username;
        })
    },

    exit(){
        this.username = '';
        storage(s=>{
            s.removeSync("username");
            s.flushSync();
        })
    },
    toLoginPage(){
        router.push({
            url:'pages/login/login',
            params:{}
        })
    },
}
