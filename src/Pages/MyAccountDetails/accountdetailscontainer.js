import React from 'react';
import { Container } from 'react-bootstrap';
import Accountdetails from '../../components/AccountsDetails/accountdetails';
import { useMediaQuery } from '../../components/Header/viewportHook';

export default function Accountdetailscontainer() {
    // const sm = useMediaQuery('(max-width: 576px)');
    const xl = useMediaQuery('(min-width: 1200px)');
    return (
        <Container className={"myaccountpage-background"}
            style={{
                margin: `$sm ? '0' :'2rem'}`,
                maxWidth: `${xl ? '90%' : ''}`,
                padding: '1rem',
                marginBottom: '4rem'
            }}>
            <Accountdetails />
        </Container>
    )
}
