import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { cardetailsstyle } from './plandetailsstyle';
import { useMediaQuery } from '../../../components/Header/viewportHook';

export default function SettingsSection() {
    const sm = useMediaQuery('(max-width: 576px)');
    const history = useHistory();
    return (
        <ListGroup style={{}}>
            <ListGroup.Item
                style={{
                    color: '#585858',
                    fontSize: '23px',
                    fontWeight: '500',
                    border: '0',
                    padding: '0.5rem 0.5rem 0 0.5rem',
                    background: '#F5F5F5',
                    width: `${sm ? '80%' : ''}`,
                    marginBottom: '0'
                }}>
                {`Settings`}
            </ListGroup.Item>
            <ListGroup.Item style={{ ...cardetailsstyle.background(), marginTop: '0.5rem' }}>
                <div
                    className=""
                    style={{
                        color: '#0D7EFF',
                        fontSize: '12px',
                        fontWeight: '400'
                    }}
                    onClick={() => history.push('/activatedevice')}
                >
                    Activate a device
                  </div>
            </ListGroup.Item >
            <ListGroup.Item style={cardetailsstyle.background()}>
                <div
                    className=""
                    style={{
                        color: '#0D7EFF',
                        fontSize: '12px',
                        fontWeight: '400'
                    }}
                    onClick={
                        () => history.push('/streamingdetails')
                    }

                >
                    Recent device streaming activity
            </div>
            </ListGroup.Item >
            <ListGroup.Item style={{ ...cardetailsstyle.background(), paddingBottom: '0.5rem' }}>
                <div
                    className=""
                    style={{
                        color: '#0D7EFF',
                        fontSize: '12px',
                        fontWeight: '400',
                        marginRight: `${sm ? '1rem' : ''}`,
                        marginBottom: '0.5rem'
                    }}>
                    Logout from all devices
            </div>
            </ListGroup.Item >
        </ListGroup >
    )
}
