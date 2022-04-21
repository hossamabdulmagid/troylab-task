import {ContactIcon, DeliverIcon, RapperSidebarComponent, SearchIcon} from './sidebar.styles'
import {Col, Form, Row} from 'react-bootstrap'

const Sidebar = () => {
    return (
        <>
            <Col bsPrefix="d-none d-md-flex d-lg-flex  d-xl-flex center-item">
                <RapperSidebarComponent>
                    <div className="sidenav-web">
                        <div className={'container'}>
                            <Row>
                                <Col xs={2} md={2} lg={2}>
                                    <h2>
                                        <ContactIcon/>
                                    </h2>
                                </Col>
                                <Col xs={2} md={2} lg={2}>
                                    <h2>
                                        <SearchIcon/>
                                    </h2>
                                </Col>
                                <Col xs={8} md={8} lg={8}>
                                    <Form.Control type="search" className={'input-search'} placeholder={`اسم الطالب`}/>
                                </Col>
                            </Row>
                            <Col className={'delivery-section text-center'}>
                                <h1>
                                    <DeliverIcon/>
                                </h1>

                                <h4>
                                    يجب عليك اختيار الطالب اولا
                                </h4>
                            </Col>
                        </div>
                    </div>
                </RapperSidebarComponent>
            </Col>
            <Col bsPrefix="d-block d-md-none d-lg-none d-xl-none center-item">
                <RapperSidebarComponent>
                    <div className="sidenav-mob">
                        <div className={'container-fluid'}>
                            <Row>
                                <Col xs={6} md={6} lg={2}>
                                    <h2>
                                        <ContactIcon/>
                                    </h2>
                                </Col>
                                <Col xs={6} md={6} lg={2}>
                                    <h2>
                                        <SearchIcon/>
                                    </h2>
                                </Col>
                                <Col xs={12} md={12} >
                                    <Form.Control type="search" className={'input-search'} placeholder={`اسم الطالب`}/>
                                </Col>
                            </Row>
                            <Col className={'row delivery-section-mob text-center'}>
                                <h1>
                                    <DeliverIcon/>
                                </h1>

                                <h4>
                                    يجب عليك اختيار الطالب اولا
                                </h4>
                            </Col>
                        </div>
                    </div>
                </RapperSidebarComponent>
            </Col>
        </>

    )
}


export default Sidebar;