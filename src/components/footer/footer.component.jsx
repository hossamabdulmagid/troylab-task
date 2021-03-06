import {Col, Container, Row} from 'react-bootstrap'
import {HomeIcon, HorizontalIcon, RapperFooterComponent, ReceiptIcon, ShopIcon, WalletIcon} from "./footer.styles";
import {NavLink} from "react-router-dom";

const Footer = () => {
    let activeStyle = {
        color: '#16A79B',
        textDecoration: 'none',
    };
    let UnActiveStyle = {
        textDecoration: 'none',
        color: 'dimgray'
    };

    return (
        <RapperFooterComponent>
            <nav>
                <Container className={"container text center align-items-center"}>
                    <Row bsPrefix="d-none d-md-flex d-lg-flex  d-xl-flex center-item" >
                        <Col>
                            <div className={'footer'}>
                                <ul className={''}>
                                    <li className={'web'}>
                                        <NavLink
                                            to="/more"
                                            style={({isActive}) =>
                                                isActive ? activeStyle : UnActiveStyle
                                            }
                                        >
                                            <h3>
                                                <HorizontalIcon/>
                                            </h3>
                                            <span>المزيد </span>
                                        </NavLink>
                                    </li>
                                    <li className={'web'}>
                                        <NavLink
                                            to="/shopping"
                                            style={({isActive}) =>
                                                isActive ? activeStyle : UnActiveStyle
                                            }
                                        >
                                            <h3>
                                                <ShopIcon/>
                                            </h3>
                                            <span> طلبات مسبقه</span>
                                        </NavLink>
                                    </li>
                                    <li className={'web'}>
                                        <NavLink
                                            to="/orders"
                                            style={({isActive}) =>
                                                isActive ? activeStyle : UnActiveStyle
                                            }
                                        >
                                            <h3>
                                                <ReceiptIcon/>
                                            </h3>
                                            <span>المبيعات</span>
                                        </NavLink>
                                    </li>
                                    <li className={'web'}>
                                        <NavLink
                                            to="/wallet"
                                            style={({isActive}) =>
                                                isActive ? activeStyle : UnActiveStyle
                                            }
                                        >
                                            <h3>
                                                <WalletIcon/>
                                            </h3>
                                            <span>المحفظة</span>
                                        </NavLink>

                                    </li>

                                    <li className={'web'}>
                                        <NavLink
                                            to="/"
                                            style={({isActive}) =>
                                                isActive ? activeStyle : UnActiveStyle
                                            }
                                        >
                                            <h3>
                                                <HomeIcon/>
                                            </h3>
                                            <span>الرئيسية</span>
                                        </NavLink>
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
                                            <NavLink
                                                to="/more"
                                                style={({isActive}) =>
                                                    isActive ? activeStyle : UnActiveStyle
                                                }
                                            >
                                                <h3>
                                                    <HorizontalIcon/>
                                                </h3>
                                                <span>المزيد </span>
                                            </NavLink>
                                        </li>

                                        <li className={'mob'}>
                                            <NavLink
                                                to="/shopping"
                                                style={({isActive}) =>
                                                    isActive ? activeStyle : UnActiveStyle
                                                }
                                            >
                                                <h3>
                                                    <ShopIcon/>
                                                </h3>
                                                <span> طلبات مسبقه</span>
                                            </NavLink>
                                        </li>

                                        <li className={'mob'}>
                                            <NavLink
                                                to="/orders"
                                                style={({isActive}) =>
                                                    isActive ? activeStyle : UnActiveStyle
                                                }
                                            >
                                                <h3>
                                                    <ReceiptIcon/>
                                                </h3>
                                                <span>المبيعات</span>
                                            </NavLink>
                                        </li>

                                        <li className={'mob'}>
                                            <NavLink
                                                to="/wallet"
                                                style={({isActive}) =>
                                                    isActive ? activeStyle : UnActiveStyle
                                                }
                                            >
                                                <h3>
                                                    <WalletIcon/>
                                                </h3>
                                                <span>المحفظة</span>
                                            </NavLink>
                                        </li>

                                        <li className={'mob'}>
                                            <NavLink
                                                to="/"
                                                style={({isActive}) =>
                                                    isActive ? activeStyle : UnActiveStyle
                                                }
                                            >

                                                <h3>
                                                    <HomeIcon/>
                                                </h3>
                                                <span>الرئيسية</span>
                                            </NavLink>

                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </nav>
        </RapperFooterComponent>
    )
}

export default Footer;