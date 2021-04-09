import React, { useState } from 'react';
import leftarrow from '../../assets/left-arrow.svg';
// import Collapsible from 'react-collapsible';
import AccordionComponent from './accordion.jsx';
import { Button, Row, Col, Image } from 'react-bootstrap';
import './style.scss';

// const List = ({ items }) => {
//     if (!items) {
//         return null;
//     }
//     return (
//         <>
//             {
//                 items.map((type, index) => (
//                     <section className="list-container" key={index}>
//                         <div className="list-item">
//                             {type}
//                         </div>
//                     </section>
//                 ))
//             }
//         </>
//     )
// };

export default function Filter({ setShowNav }) {
    const [category, setCategory] = useState(['Drama', 'Love', 'Romance', 'horror', 'Sci-fi', 'Action', 'Anime']);
    const [filterType, setFilterType] = useState(['Category', 'Cast Crew', 'Language', 'Year']);
    return (
        <>
            <div
                className="filter-title mb-2"
            >
                <Row
                    className={'p-3'}
                >
                    <Col
                        style={{ marginTop: '1%' }}
                        onClick={() => setShowNav(false)}
                    >
                        <Image
                            src={leftarrow}
                            alt={'close filter'}
                        />
                    </Col>
                    <Col
                        style={{
                            color: 'white',
                            fontSize: '25px',
                            textAlign: 'center'
                        }}
                    >{'Filter'}
                    </Col>
                    <Col
                        style={{
                            color: '#A3A4A5',
                            fontSize: '15px',
                            marginTop: '2%'
                        }}
                    >
                        <div
                            className={'float-right'}
                        >
                            {'Clear Filter'}
                        </div>
                    </Col>
                </Row>
            </div>
            <section
                className={'filter-wrapper'}
            >
                <AccordionComponent
                    items={category}
                    filterType={filterType}
                />
            </section>
            <footer
                className={"bg-light text-center text-lg-start"}
            >
                <div
                    className={"Container text-left p-3 fixed-bottom"}
                    style=
                    {{
                        backgroundColor: '#363A43',
                        color: '#E6E6E6'
                    }}
                >
                    <Row className="">
                        <Col>
                            <h4>101</h4>
                            <div >Movies Found</div>
                        </Col>
                        <Col style={{ textAlign: 'right' }} >
                            <Button variant="light">Apply</Button>
                        </Col>
                    </Row>
                </div>
            </footer>
        </>
    )
}