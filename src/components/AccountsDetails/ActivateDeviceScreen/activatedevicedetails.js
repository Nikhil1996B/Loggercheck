import React from 'react';
import { GroupList } from 'react-bootstrap';
import Managedevice from './ManageDevice/managedevice';
import Activatedeviceform from './ActivateDeviceForm/activatedeviceform';
export default function Activatedevicedetails() {
    return (
        <>
            <Activatedeviceform />
            <Managedevice />
        </>
    )
}
