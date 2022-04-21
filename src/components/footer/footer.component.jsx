import {Col, Container, Row} from 'react-bootstrap'
import {HomeIcon, HorizontalIcon, RapperFooterComponent, ReceiptIcon, ShopIcon, WalletIcon} from "./footer.styles";

const Footer = () => {
    return (
        <RapperFooterComponent>
            <Container className={"text center align-items-center"}>
                <Row bsPrefix="d-none d-md-flex d-lg-flex  d-xl-flex center-item">
                    <Col>
                        <div className={'footer'}>
                            <ul>
                                <li className={'web'}>
                                    <h3>
                                        <HorizontalIcon/>
                                    </h3>
                                    <span>المزيد </span>

                                </li>
                                <li className={'web'}>
                                    <h3>
                                        <ShopIcon/>
                                    </h3>
                                    <span> طلبات مسبقه</span>
                                </li>
                                <li className={'web'}>
                                    <h3>
                                        <ReceiptIcon/>
                                    </h3>
                                    <span>المبيعات</span>

                                </li>
                                <li className={'web'}>
                                    <h3>
                                        <WalletIcon/>
                                    </h3>
                                    <span>المحفظة</span>

                                </li>

                                <li className={'web'}>
                                    <h3>
                                        <HomeIcon/>
                                    </h3>
                                    <span>
                                    الرئيسية
                                    </span>

                                </li>


                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Row bsPrefix="d-block d-md-none d-lg-none d-xl-none center-item">
                        <Col>
                            <div className={'footer'}>
                                <ul>
                                    <li className={'mob'}>
                                        <h3>
                                            <HorizontalIcon/>
                                        </h3>
                                        <span>المزيد </span>

                                    </li>

                                    <li className={'mob'}>
                                        <h3>
                                            <ShopIcon/>
                                        </h3>
                                        <span> طلبات مسبقه</span>
                                    </li>

                                    <li className={'mob'}>
                                        <h3>
                                            <ReceiptIcon/>
                                        </h3>
                                        <span>المبيعات</span>
                                    </li>

                                    <li className={'mob'}>
                                        <h3>
                                            <WalletIcon/>
                                        </h3>
                                        <span>المحفظة</span>
                                    </li>

                                    <li className={'mob'}>
                                        <h3>
                                            <HomeIcon/>
                                        </h3>
                                        <span>الرئيسية</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </RapperFooterComponent>
    )
}

export default Footer;