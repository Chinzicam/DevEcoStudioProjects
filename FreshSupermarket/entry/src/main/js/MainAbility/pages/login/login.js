import router from '@ohos.router';
import ajax from '../../common/js/ajax';
import storage from '../../common/js/storage';
import prompt from '@ohos.prompt'
export default {
    data: {
        title: "",
        phone:'',
        password:'',
    },
    toRegisterPage(){
        router.push({
            url:'pages/register/register',
            params:{}
        })
    },
    changePhone(e){
        this.phone = e.value;
    },
    changePassword(e){
        this.password = e.value;
    },
    submit(){
        ajax.post({
            url:'http://124.71.79.186:8081/user/login',
            data:{
                phone:this.phone,
                password:this.password
            },
            method:'post',
            success:resp=>{
                console.log(resp)
                let code = resp.code;
                if (code != 200) {
                    prompt.showToast({
                        message:"账号密码错误"
                    })
                    return;
                }
                else{
                    storage(s=>{
                        s.putSync('username',this.phone);
                        s.flushSync();
                        prompt.showToast({
                            message:"登录成功"
                        })
                        router.push({
                            url:'pages/my/my',
                            params:{}
                        })
                    })
                }

            }
        })
    },

}