import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FileSizePipe} from './file-size.pipe';
import { DeviceSortPipe } from './device-sort.pipe';
import { TemperaturePipe } from './temperature.pipe';
import { DeviceTitlePipe } from './device-title.pipe';
import { DeviceStatusPipe } from './device-status.pipe';
import { DeviceHoursPipe } from './device-hours.pipe';
import { DeviceTestStatusPipe } from './device-test-status.pipe';

@NgModule({
    declarations: [
        FileSizePipe,
        DeviceSortPipe,
        TemperaturePipe,
        DeviceTitlePipe,
        DeviceStatusPipe,
        DeviceHoursPipe,
        DeviceTestStatusPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FileSizePipe,
        DeviceSortPipe,
        DeviceTitlePipe,
        DeviceStatusPipe,
        TemperaturePipe,
        DeviceHoursPipe,
        DeviceTestStatusPipe
    ]
})
export class SharedModule
{
}
