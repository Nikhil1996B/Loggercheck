import React from 'react';
import {
    Container,
    Row,
    Card,
    Col,
    ListGroup
} from 'react-bootstrap';
import Title from './Title/title';
import Plandetails from './PlansDetails/plandetails';
import Membershipdetails from './Membershipdetails/membership';
import { accountdetailsstyle } from './accountdetailsstyle';
import { useMediaQuery } from '../../components/Header/viewportHook';
import Sidenavbar from './SideNavBar/sidenavbar';
import Accountdetailsglobalstyle from './accountdetailsglobalstyle';

export default function Accountdetails() {
    const sm = useMediaQuery('(max-width: 576px)');
    return (
        <>
            <Accountdetailsglobalstyle />
            <Row>
                <Title title={'Account details'} />
            </Row>
            <Row style={{ marginTop: '1rem' }}>
                <Col
                    style={{
                        ...accountdetailsstyle.background(sm),
                        ...accountdetailsstyle.membership(sm)
                    }}>
                    <Membershipdetails />
                </Col>
                <Col
                    style={{
                        ...accountdetailsstyle.background(sm),
                        ...accountdetailsstyle.plan(sm)
                    }}>
                    <Plandetails />
                </Col>
            </Row>
        </>
    )
}
