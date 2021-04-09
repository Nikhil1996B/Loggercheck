import React from 'react';
import { useDispatch } from 'react-redux';
import {
    Button,
    Accordion,
    Card,
    Container,
    Row,
    Col
} from "react-bootstrap";
import { accordionStyle, cardBody, Items, FilterAccordionGlobalStyle } from './accrodionstyle';
import { searchActions } from '../../../../actions/searchactions';


// static assets
import downarrow from '../assets/down-arrow.svg';

function AccordionComponent({ items, filterType }) {
    const dispatch = useDispatch()

    const doSearch = query => {
        dispatch(searchActions.SearchReq(query))
    }
    return (
        <>
            <FilterAccordionGlobalStyle />
            {
                filterType && filterType.map((type, index) => (
                    <Accordion
                        defaultActiveKey={index === 0 ? '0' : "1"}
                        key={index}
                        style={{ marginBottom: '2%' }}
                        className={'filterclass'}>
                        <Card style={{ border: 'none' }}>
                            <Card.Header
                                style={accordionStyle()}
                                className={'filter-header-wrapper'}>
                                <Accordion.Toggle
                                    as={Button}
                                    style={{ background: '#363A43' }}
                                    variant="link"
                                    eventKey="0"
                                >
                                    <Row>
                                        <Col>
                                            {type}
                                        </Col>
                                        <Col
                                            style={{
                                                textAlign: 'right'
                                            }}>
                                            <img
                                                src={downarrow}
                                                alt="chevron"
                                                style={{
                                                    height: '13px',
                                                    width: '25px',
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse
                                eventKey="0"
                            >
                                <Card.Body
                                    style={cardBody()}>
                                    <Container >
                                        <Row  >
                                            {items.map((type, index) =>
                                            (
                                                <Col
                                                    key={index}
                                                    style={Items()}
                                                    lg={2}
                                                    onClick={() => doSearch(type)}
                                                >
                                                    {type}
                                                </Col>
                                            ))
                                            }
                                        </Row>
                                    </Container>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                ))
            }
        </>
    )
}
export default AccordionComponent;