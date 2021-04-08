import React from 'react';
import { useHistory } from 'react-router-dom';
import { ListGroup, Image } from 'react-bootstrap';
import { membershipstyle } from './membershipstyle';
import Visa from '../icons/Visa.png';
export default function Carddetails() {
    const history = useHistory();
    return (
        <ListGroup >
            <ListGroup.Item style={{ ...membershipstyle.background(), marginTop: '0.5rem' }}>
                <div
                    className="float-left"
                    style={{
                        fontSize: '15px',
                        color: '#585858',
                        fontWeight: 'bold'
                    }}>
                    <Image src={`${Visa}`} alt="card type logo" style={{ paddingRight: '1rem' }} />
                    --- --- --- 1234
                </div>
                <div
                    className="float-right"
                    style={{
                        color: '#0D7EFF',
                        fontSize: '12px',
                        fontWeight: '400'
                    }}>
                    {`Manage payment info`}
                </div>
            </ListGroup.Item >
            <ListGroup.Item style={membershipstyle.background()}>
                <div
                    className="float-left"
                    style={{
                        fontSize: '15px',
                        color: '#585858',
                        maxWidth: '40%',
                        textTransform: 'capitalize'
                    }}>
                    {'60 Border Avenue Oshkosh, WI 54901'}
                </div>
                <div
                    className="float-right"
                    style={{
                        color: '#0D7EFF',
                        fontSize: '12px',
                        fontWeight: '400'
                    }}
                    onClick={() => history.push('/billingdetails')}
                >
                    Manage Billing details
                </div>
            </ListGroup.Item >
        </ListGroup >
    )
}
