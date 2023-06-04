//import hilog from '@ohos.hilog';
//
//export default {
//    onCreate() {
//        hilog.info(0x0000, 'testTag', '%{public}s', 'Application onCreate');
//    },
//    onDestroy() {
//        hilog.info(0x0000, 'testTag', '%{public}s', 'Application onDestroy');
//    },
//}

import ajax from '../MainAbility/common/js/ajax';
ajax.defaults.debug=false;

export default {
    onCreate() {
        console.log("application create")
        ajax.get({
            url:'http://124.71.79.186:8081/menu/findNav',
            success:resp=>{
                console.log(JSON.stringify(resp.data))
            }
        })
    },
    onDestroy() {
        console.info("application destroy");
    },
}