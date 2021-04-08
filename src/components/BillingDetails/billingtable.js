import React from 'react';
import { Table, Image } from 'react-bootstrap';
import Visa from '../AccountsDetails/icons/Visa.png';
import { billingdetailsstlye } from './billingdetailsstyle';
export default function Billingtable() {
    return (
        <Table hover style={{ borderTop: '0', marginTop: '1rem', marginBottom: '4rem' }} responsive="sm">
            <thead style={{ borderTop: '0' }}>
                <tr >
                    <th style={billingdetailsstlye.th()}>Date</th>
                    <th style={billingdetailsstlye.th()}>Description</th>
                    <th style={billingdetailsstlye.th()} >Service period</th>
                    <th style={billingdetailsstlye.th()}>Payment method</th>
                    <th style={billingdetailsstlye.th()}>Subtotal</th>
                    <th style={billingdetailsstlye.th()}>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={billingdetailsstlye.td()}>01/25/21</td>
                    <td style={billingdetailsstlye.td()}>Sreaming Service</td>
                    <td style={billingdetailsstlye.td()}>01/25/21 - 01/25/22</td>
                    <td style={billingdetailsstlye.td()}>
                        <Image
                            src={Visa}
                            style={{ paddingRight: '0.25rem' }}
                        />
                        --- --- 1234
                        </td>
                    <td style={billingdetailsstlye.td()}>
                        $79.99
                    </td>
                    <td style={billingdetailsstlye.td()}>
                        $79.99
                    </td>
                </tr>
                <tr>
                    <td>01/25/21</td>
                    <td>Sreaming Service</td>
                    <td>01/25/21 - 01/25/22</td>
                    <td>
                        <Image
                            src={Visa}
                            style={{ paddingRight: '0.25rem' }}
                        />
                        --- --- 1234
                        </td>
                    <td>
                        $79.99
                    </td>
                    <td>
                        $79.99
                    </td>
                </tr>

            </tbody>
        </Table>
    )
}
