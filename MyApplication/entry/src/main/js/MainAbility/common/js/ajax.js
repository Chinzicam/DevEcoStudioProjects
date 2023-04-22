// @ts-nocheck
import fetch from '@system.fetch'
import http from '@ohos.net.http'

let ajax = {
   defaults:{
      host:'',
      debug:true,
   }
}
function  get(obj){
   request(obj);
}
function post(obj){
   log('方法未实现');
}

function log(msg){
   console.log('APP_DEBUG:' + JSON.stringify(msg));
}

function request(obj){
   if(!obj || !obj.url){
      return console.error('url必须');
   }

   let url = ajax.defaults.host  + obj.url;

   if(ajax.defaults.debug){
      log('fetch模块')
      fetch.fetch({
         url ,
         success:resp=>{
            if(( typeof obj.success) === 'function' ){
               let d = resp.data;
               try{
                  d = JSON.parse(d)
               }catch{
                  log('后端返回类型不是json格式')
               }
               obj.success(d);
            }
         },
         fail:e=>{
            log('执行失败:' +JSON.stringify(e))
         },
         complete:r=>{
         }
      })
   }else{
      log('http模块')
      let r = http.createHttp();
      r.request( url, {} , (err,data)=>{

         if(! err){
            if( (typeof obj.success) === 'function' ){
               let d = data.result;
               try{
                  d = JSON.parse(d)
               }catch{
                  log('后端返回类型不是json格式')
               }
               obj.success(d);
            }
         }else{
            return log(err)
         }
         r.destroy();
      })
   }
}


ajax.get = get;
ajax.post = post;
export default ajax;