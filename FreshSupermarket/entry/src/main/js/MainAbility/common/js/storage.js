import dataStorage from '@ohos.data.storage'
import featureAbility from '@ohos.ability.featureAbility';

var context = featureAbility.getContext();

export default function (storageFile ,callback){

    let f , m;
    if(typeof storageFile === 'string'){
        f = storageFile;
        if(typeof callback === 'function'){
            m = callback;
        }
    }
    if(typeof storageFile === 'function'){
        f = '/defaultStorageFile';
        m = storageFile;
    }

    context.getFilesDir().then((filePath) => {
        let storage = dataStorage.getStorageSync(filePath + f) ;
        m(storage);
    });
}