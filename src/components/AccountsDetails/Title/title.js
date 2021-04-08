import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { titleStyle } from './titlestyle';
import { useMediaQuery } from '../../../components/Header/viewportHook';

export default function Title({ title = '' }) {
    const sm = useMediaQuery('(max-width: 576px)');
    return (
        <Card style={titleStyle.Card(sm)}>
            <Card.Title style={titleStyle.title(sm)}>{title}</Card.Title>
        </Card>
    )
}
