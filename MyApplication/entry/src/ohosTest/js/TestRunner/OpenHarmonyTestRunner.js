import hilog from '@ohos.hilog';
import AbilityDelegatorRegistry from '@ohos.application.abilityDelegatorRegistry';

 export default {
    onPrepare() {
        hilog.info(0x0000, 'testTag', '%{public}s', 'OpenHarmonyTestRunner OnPrepare');
    },
    onRun() {
        hilog.info(0x0000, 'testTag', '%{public}s', 'OpenHarmonyTestRunner onRun run');
        var abilityDelegatorArguments = AbilityDelegatorRegistry.getArguments()
        var abilityDelegator = AbilityDelegatorRegistry.getAbilityDelegator()

        var testAbilityName = abilityDelegatorArguments.parameters['-p'] + '.TestAbility'
        var cmd = 'aa start -d 0 -a ' + testAbilityName + ' -b ' + abilityDelegatorArguments.bundleName
        var debug = abilityDelegatorArguments.parameters["-D"]
        if (debug == 'true')
        {
            cmd += ' -D'
        }
        hilog.info(0x0000, 'testTag', 'cmd : %{public}s', cmd);
        abilityDelegator.executeShellCommand(cmd, (err, data) => {
            hilog.info(0x0000, 'testTag', 'executeShellCommand : err : %{public}s', JSON.stringify(err) ?? '');
            hilog.info(0x0000, 'testTag', 'executeShellCommand : data : %{public}s', data.stdResult ?? '');
            hilog.info(0x0000, 'testTag', 'executeShellCommand : data : %{public}s', data.exitCode ?? '');
        })
    }
};