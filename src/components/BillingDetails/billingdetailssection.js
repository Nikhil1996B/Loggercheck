import React from 'react';
import { Card } from 'react-bootstrap';
import { billingdetailsstlye } from './billingdetailsstyle';
import Billingtable from './billingtable';
import { useMediaQuery } from '../../components/Header/viewportHook';

export default function Billingdetailssection() {
    const sm = useMediaQuery('(max-width: 576px)');

    return (
        <>
            <h3 style={billingdetailsstlye.title(sm)}>
                Billing Details
            </h3>
            <Card style={billingdetailsstlye.card(sm)}>
                <Card.Body style={{ background: '#F5F5F5', border: '0' }}>
                    <Card.Title style={{ fontSize: '19px', color: '#585858' }}>
                        Your Membership
                    </Card.Title>
                    <Card.Body style={billingdetailsstlye.cardbody()}>
                        <div style={{ margin: '0 0.5rem' }}>
                            <p style={billingdetailsstlye.details(sm)}>
                                {'Your plan'}
                            </p>
                            <p style={billingdetailsstlye.options(sm)}>
                                {'Annual'}
                            </p>
                        </div>
                        <div style={{ margin: '0 0.5rem' }}>
                            <p style={billingdetailsstlye.details(sm)}>
                                {'Your next bill'}
                            </p>
                            <p style={billingdetailsstlye.options(sm)}>
                                {'2 Febrauary 2022'}
                            </p>
                        </div>
                    </Card.Body>
                </Card.Body>
            </Card>
            <Billingtable />
        </>
    )
}
