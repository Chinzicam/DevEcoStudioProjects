import router from '@ohos.router';
import ajax from '../../common/js/ajax';
import storage from '../../common/js/storage';
import prompt from '@ohos.prompt'
export default {
    data: {
        phone:'',
        password:'',
        password2:'',
    },
    onInit() {
    },
    toLoginPage(){
        router.push({
            url:'pages/login/login',
            params:{}
        })
    },
    register(){
        ajax.post({
            url:'http://124.71.79.186:8081/user/reg',
            data:{
                phone:this.phone,
                password:this.password,
                password2:this.password2
            },
            success:resp=>{
                console.log(JSON.stringify("qwer"+resp))
                let code = resp.code;
                if (code != 200) {
                    prompt.showToast({
                        message:resp.msg
                    })
                    return;
                }
                else{
                    storage(s=>{
                        s.putSync('username',this.phone);
                        s.putSync('password',this.password);
                        s.flushSync();
                        console.log("qwer注册成功")
                        prompt.showToast({
                            message:"注册成功"
                        })
                        console.log("qwer注册成功")
                        router.push({
                            url:'pages/login/login',
                            params:{}
                        })
                    })
                }


            }
        })
    },
}
