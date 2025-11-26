import {Pipe, PipeTransform} from '@angular/core';
import {DeviceModel} from '../core/models/device-model';

@Pipe({
    name: 'deviceTestStatus'
})
export class DeviceTestStatusPipe implements PipeTransform {
    static deviceTestStatus(
        deviceModel: DeviceModel,
        hasSmartResults: boolean = true,
    ): string {
        if (!hasSmartResults) {
            return 'unknown'
        }

        // tslint:disable-next-line:no-bitwise
        if(deviceModel.device_status & 3) {
            // Device is currently undergoing a test
            return `ongoing: ${deviceModel.test_percent}%`
        } else {
            return "None"
        }
    }

    transform(
        deviceModel: DeviceModel,
        hasSmartResults: boolean = true,
    ): string {
        return DeviceTestStatusPipe.deviceTestStatus(deviceModel, hasSmartResults)
    }
}
