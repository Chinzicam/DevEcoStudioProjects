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
   request({...obj,...{method:'POST'}})
}

function log(msg){
   console.log('APP_DEBUG:' + JSON.stringify(msg));
}

function request(obj){
  // log(obj)
   if(!obj || !obj.url){
      return console.error('url必须');
   }

   let url = ajax.defaults.host  + obj.url;

   //请求头和请求方法
   obj.method = obj.method || 'GET';
   if(obj.method.toUpperCase() === 'POST'){
      obj.header = obj.header|| {};
      obj.header['Content-type'] =  obj.header['Content-type'] || 'application/json';
   }


   if(ajax.defaults.debug){
      log('fetch模块')
      let obj1 = {...obj,...{ url,success:resp=>{
            if(( typeof obj.success) === 'function' ){
               let d = resp.data;
               try{
                  d = JSON.parse(d)
               }catch{
                  log('后端返回类型不是json格式')
               }
               log(d);
               obj.success(d);
            }
         },
         fail:e=>{
            log('执行失败:' +JSON.stringify(e))
         },
         complete:r=>{
         }}}
      fetch.fetch(obj1)
   }else{
      log('http模块')
      let r = http.createHttp();
      let settings = {header: obj.header} //请求头
      //请求方法
      settings.method = http.RequestMethod ? http.RequestMethod[obj.method] : obj.method;
      //请求体
      settings.extraData = obj.data;

      r.request( url, settings , (err,data)=>{
         if(! err){
            if( (typeof obj.success) === 'function' ){
               let d = data.result;
               try{
                  d = JSON.parse(d)
               }catch{
                  log('后端返回类型不是json格式')
               }
               log(d);
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