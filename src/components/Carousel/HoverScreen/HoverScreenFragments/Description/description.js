import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { descriptionstyle } from './descriptionstyle';

export default function Description({ smallsize }) {
    return (
        <>
            <Row style={{ padding: '0', margin: '0' }}>
                Movie Title
             </Row>
            {
                <>
                    <Row style={descriptionstyle.description(smallsize)}>
                        Inspired by the book ‘Simply Fly’, the film tells the story of Nedumaaran Rajangam known to friends as Maara, the son of a...
                     </Row>
                    <Row style={descriptionstyle.subdescription(smallsize)}>
                        <Col style={{ paddingLeft: `${smallsize ? '0px' : ''}` }}>
                            2h20min
                          </Col>
                        <Col style={{ paddingRight: `${smallsize ? '0px' : ''}` }}>
                            2020
                        </Col>
                        <Col style={{ paddingRight: `${smallsize ? '0px' : ''}` }}>
                            Certificate: U
                       </Col>
                    </Row>
                </>
            }
        </>
    )
}
