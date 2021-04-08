import React from 'react';
import { Table, Image } from 'react-bootstrap';
import { managedevicesstlye } from './managedevicestyle';
import deleteicon from './icons/delete.svg';

export default function Managedevice() {
    return (
        <>
            <h4>Manage your devices</h4>
            <Table hover style={{ borderTop: '0', marginTop: '1rem', marginBottom: '4rem' }} responsive="sm">
                <thead style={{ borderTop: '0' }}>
                    <tr >
                        <th style={managedevicesstlye.th()}>S.No</th>
                        <th style={managedevicesstlye.th()}>Device ID</th>
                        <th style={managedevicesstlye.th()} >Device type</th>
                        <th style={managedevicesstlye.th()}>Registered date</th>
                        <th style={managedevicesstlye.th()}>Status</th>
                        <th style={{ ...managedevicesstlye.th() }}>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={managedevicesstlye.td()}>1</td>
                        <td style={managedevicesstlye.td()}>0660FC8E-81B5-4DD1-9318-057635D5A49A</td>
                        <td style={managedevicesstlye.td()}>iOS</td>
                        <td style={managedevicesstlye.td()}>
                            2 November 2020 17:48
                        </td>
                        <td style={{
                            ...managedevicesstlye.td(),
                            color: '#E1540F',
                            fontWeight: 'bold'
                        }}>
                            Active
                        </td>
                        <th style={{ ...managedevicesstlye.th(), textAlign: 'center' }}>
                            <Image src={`${deleteicon}`} alt="delete device" />
                        </th>
                    </tr>
                    <tr>
                        <td style={managedevicesstlye.td()}>1</td>
                        <td style={managedevicesstlye.td()}>0660FC8E-81B5-4DD1-9318-057635D5A49A</td>
                        <td style={managedevicesstlye.td()}>iOS</td>
                        <td style={managedevicesstlye.td()}>
                            2 November 2020 17:48
                        </td>
                        <td
                            style={{
                                ...managedevicesstlye.td(),
                                color: '#AEAEAE',
                                fontWeight: 'bold'
                            }}>
                            Inactive
                        </td>
                        <th style={{ ...managedevicesstlye.th(), textAlign: 'center' }}>
                            <Image src={`${deleteicon}`} alt="delete device" />
                        </th>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}
