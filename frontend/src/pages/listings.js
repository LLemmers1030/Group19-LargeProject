import GoogleMap from './GoogleMaps'
import "antd/dist/antd.css";
import { Collapse, Row, Col } from 'antd';
import home from '../images/home.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// Use state is used for the navbar
import React, { useState } from 'react';
const { Panel } = Collapse;

const HouseListings = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="App">
            {/* <Navbar toggle={toggle} /> */}

            {/* <h1 className="header">Listings</h1> */}
            <div className="container-1">

                {/* Maybe instead of div use Col/Row from ant design */}
                <div className="split col-1">
                    <div>
                        <h1 className="listings-header">Available Listings</h1>
                    </div>

                    <Collapse className="collapse-main" accordion span={12}>
                        <Panel className="odd" header="House A" key="1">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 3 Bedroom<br /> 2 Bathroom<br /> $800/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>

                        </Panel>
                        <Panel className="even" header="House B" key="2">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 2 Bedroom<br /> 1.5 Bathroom<br /> $650/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>

                        <Panel className="odd" header="House C" key="3">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 2 Bedroom<br /> 1 Bathroom<br /> $600/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>
                        <Panel className="even" header="House E" key="5">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 2 Bedroom<br /> 1 Bathroom<br /> $600/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>

                        <Panel className="odd" header="House 1" key="6">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 2 Bedroom<br /> 1 Bathroom<br /> $675/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>
                        <Panel className="even" header="House 2" key="7">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 2 Bedroom<br /> 1 Bathroom<br /> $650/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>

                        </Panel>
                        <Panel className="odd" header="House 5" key="8">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 2 Bedroom<br /> 1 Bathroom<br /> $600/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>

                        <Panel className="even" header="House 6" key="9">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 2 Bedroom<br /> 1 Bathroom<br /> $625/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>
                        <Panel className="odd" header="House 7" key="10">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 2 Bedroom<br /> 1 Bathroom<br /> $675/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>

                        </Panel>
                        <Panel className="even" header="House 8" key="11">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 3 Bedroom<br /> 2 Bathroom<br /> $750/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>

                        <Panel className="odd" header="House 10" key="12">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 2 Bedroom<br /> 1 Bathroom<br /> $650/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>
                        <Panel className="even" header="House 11" key="13">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 2 Bedroom<br /> 1 Bathroom<br /> $625/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>

                        </Panel>
                        <Panel className="odd" header="House 12" key="14">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 2 Bedroom<br /> 1 Bathroom<br /> $600/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>

                        <Panel className="even" header="House 13" key="15">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 2 Bedroom<br /> 1 Bathroom<br /> $600/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>
                        <Panel className="odd" header="House 14" key="16">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 3 Bedroom<br /> 1.5 Bathroom<br /> $750/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>

                        </Panel>
                        <Panel className="even" header="House 15" key="17">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 2 Bedroom<br /> 1 Bathroom<br /> $650/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>

                        <Panel className="odd" header="House 16" key="18">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 2 Bedroom<br /> 1 Bathroom<br /> $500/Month</p>
                                </Col>
                                <Col span={12}>
                                    <img className="house" src={home} alt="house test" ></img>
                                </Col>
                            </Row>
                        </Panel>

                        <Panel className="even" header="House 17" key="19">

                            <Row justify="center" align="top" gutter={[48, 16]}>
                                <Col span={12}>
                                    <h2 className="house-description">House Description</h2>
                                    <p className="panel-paragraph"> 2 Bedroom<br /> 2 Bathroom<br /> $700/Month</p>
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