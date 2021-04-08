import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Plandetailssection from './plandetailssection';
import SettingsSection from './settingsSection';

export default function Plandetails() {
    return (
        <>
        <Plandetailssection></Plandetailssection>
        <SettingsSection></SettingsSection>
        </>
    )
}
