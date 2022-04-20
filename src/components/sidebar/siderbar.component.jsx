import {ContactIcon, DeliverIcon, RapperSidebarComponent, SearchIcon} from './sidebar.styles'
import {Col, Container, Form, Row} from 'react-bootstrap'

const Sidebar = () => {
    return (
        <RapperSidebarComponent>
            <div className="sidenav">
                <Container>
                    <Row>
                        <Col xs={2} md={2} lg={2}>
                            <h3>
                                <ContactIcon/>
                            </h3>
                        </Col>
                        <Col xs={2} md={2} lg={2}>
                            <h3>
                                <SearchIcon/>
                            </h3>
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
                </Container>
            </div>
        </RapperSidebarComponent>

    )
}


export default Sidebar;