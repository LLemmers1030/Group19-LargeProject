// import React from 'react'

// const HouseListings = () => {
//     return (
//         <div>
//             <h1>This is the listings page</h1>
//             <p>Lorem ipsum</p>
//         </div>
//     )
// }

// export default HouseListings;

// import './App.css';
import GoogleMap from './GoogleMaps'
import "antd/dist/antd.css";
import { Collapse, Row, Col } from 'antd';
import home from '../images/home.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// Use state is used for the navbar
import React, { useState } from 'react';
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


const HouseListings = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="App">
            <Navbar toggle={toggle} />


            {/* <h1 className="header">Listings</h1> */}
            <div className="container-1">

                {/* Maybe instead of div use Col/Row from ant design */}
                <div className="split col-1">
                    <div>
                        <h1 className="listings-header">Available Listings</h1>
                    </div>

                    <Collapse accordion span={12}>
                        <Panel className="odd" header="House A" key="1">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <p className="panel-paragraph">{text}</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>

                        </Panel>
                        <Panel className="even" header="House B" key="2">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <p className="panel-paragraph">{text}</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>

                        <Panel className="odd" header="House C" key="3">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <p className="panel-paragraph">{text}</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>
                        <Panel className="even" header="House D" key="4">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <p className="panel-paragraph">{text}</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>

                        </Panel>
                        <Panel className="odd" header="House E" key="5">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <p className="panel-paragraph">{text}</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>

                        <Panel className="even" header="House 1" key="6">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <p className="panel-paragraph">{text}</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>
                        <Panel className="odd" header="House 2" key="7">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <p className="panel-paragraph">{text}</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>

                        </Panel>
                        <Panel className="even" header="House 5" key="8">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <p className="panel-paragraph">{text}</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>

                        <Panel className="odd" header="House 6" key="9">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <p className="panel-paragraph">{text}</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>
                        <Panel className="even" header="House 7" key="10">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <p className="panel-paragraph">{text}</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>

                        </Panel>
                        <Panel className="odd" header="House 8" key="11">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <p className="panel-paragraph">{text}</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>

                        <Panel className="even" header="House 10" key="12">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <p className="panel-paragraph">{text}</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>
                        <Panel className="odd" header="House 11" key="13">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <p className="panel-paragraph">{text}</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>

                        </Panel>
                        <Panel className="even" header="House 12" key="14">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <p className="panel-paragraph">{text}</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>

                        <Panel className="odd" header="House 13" key="15">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <p className="panel-paragraph">{text}</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>
                        <Panel className="even" header="House 14" key="16">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <p className="panel-paragraph">{text}</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>

                        </Panel>
                        <Panel className="odd" header="House 15" key="17">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <p className="panel-paragraph">{text}</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>

                        <Panel className="even" header="House 16" key="18">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <p className="panel-paragraph">{text}</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>

                        <Panel className="odd" header="House 17" key="19">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <p className="panel-paragraph">{text}</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>

                    </Collapse>
                </div>

                <div className="split col-2">
                    <GoogleMap />
                </div>

            </div>
            {/* <Footer /> */}

        </div>
    )
}

export default HouseListings;