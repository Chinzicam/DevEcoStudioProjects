import hilog from '@ohos.hilog';
import AbilityDelegatorRegistry from '@ohos.application.abilityDelegatorRegistry';
import { Hypium } from '@ohos/hypium';
import testsuite from '../test/List.test';

export default {
    onCreate() {
        hilog.info(0x0000, 'testTag', '%{public}s', 'TestApplication onCreate');
        var abilityDelegator = AbilityDelegatorRegistry.getAbilityDelegator()
        var abilityDelegatorArguments = AbilityDelegatorRegistry.getArguments()
        hilog.info(0x0000, 'testTag', '%{public}s', 'start run testcase!!!');
        Hypium.hypiumTest(abilityDelegator, abilityDelegatorArguments, testsuite)
    },
    onDestroy() {
        hilog.info(0x0000, 'testTag', '%{public}s', 'TestApplication onDestroy');
    }
};
