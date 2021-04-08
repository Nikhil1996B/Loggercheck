import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { membershipstyle } from './membershipstyle';
import Carddetails from './carddetails';
import Billingdetails from './billingdetails';

export default function Membershipdetails() {
    return (
        <>
            <Billingdetails />
            <Carddetails />
        </>
    )
}
