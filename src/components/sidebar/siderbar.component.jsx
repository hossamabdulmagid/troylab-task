import {
    BUTTON,
    CloseIcon,
    CloseIconRed,
    ContactIcon,
    DeliverIcon,
    RapperSidebarComponent,
    SearchIcon
} from './sidebar.styles'
import {Card, Col, Form, Row} from 'react-bootstrap'
import {useRef, useState} from "react";

import {AiOutlineClose} from "react-icons/ai";

const Sidebar = () => {
    const [flag, setFlag] = useState(false);

    const handleChangeSearchInput = (e) => {
        if (e.target.value.length > 0) {
            setFlag(true);
        } else {
            setFlag(false);
        }
    }

    const refInput = useRef(null);

    const getFocus = (refInput) => {
        refInput && refInput.current && refInput.current.focus();
    }

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
                                        <SearchIcon onClick={getFocus}/>
                                    </h2>
                                </Col>
                                <Col xs={8} md={8} lg={8}>
                                    <Form.Control
                                        type="search"
                                        className={'input-search'}
                                        placeholder={`اسم الطالب`}
                                        onChange={handleChangeSearchInput}
                                        ref={refInput}
                                    />
                                </Col>
                            </Row>
                            {!flag ?
                                <Col className={'delivery-section text-center'}>
                                    <h1>
                                        <DeliverIcon/>
                                    </h1>

                                    <h4>
                                        يجب عليك اختيار الطالب اولا
                                    </h4>
                                </Col> : (
                                    <>
                                        <Card className={'search-result'}>
                                            <Card.Header className={'card-header'}>
                                                <div>
                                                    <CloseIcon/>
                                                    <small>الرقم المقصفي 135</small>
                                                    <div className={'profile-pic'}>
                                                        <img
                                                            alt={'profile is loaded'}

                                                            src={`https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg`}/>
                                                        <small>
                                                            محمد بن بدر بن الوشقيري
                                                        </small>
                                                    </div>
                                                </div>

                                            </Card.Header>

                                            <div className={'card-body-head'}>
                                                <Card.Body className={"card-body"}>
                                                    <Card.Title dir={'rtl'}>منتجات 3</Card.Title>
                                                    {[1, 2].map((idx) => {
                                                        return (
                                                            <div className={'box'} key={idx}>
                                                                <div className={'container box-header'}>

                                                                    <CloseIconRed/>
                                                                    <div className={'box-content'} dir={'rtl'}>

                                                                        <span> شيبسي لايز 150 جرام</span>
                                                                        <small>
                                                                            <img
                                                                                src={"https://z.nooncdn.com/products/tr:n-t_200/v1635618159/N51639465A_1.jpg"}
                                                                                alt={'profile is loaded'}
                                                                                className={'product-img'}
                                                                            />
                                                                        </small>
                                                                        <p>
                                                                            7.50 ريال <AiOutlineClose/>
                                                                            <strong>
                                                                                2
                                                                            </strong>
                                                                            <span className={'price'}>
                                                                                 <strong>
                                                                                        15.00
                                                                                    </strong>
                                                                                ريال
                                                                            </span>


                                                                        </p>

                                                                    </div>

                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </Card.Body>
                                            </div>

                                        </Card>
                                        <Card className={'card-body-head'}>
                                            <Card.Body className={'card-body-head'}>
                                                <div className={''}>
                                                    <div className={'row'}>

                                                        <div className={'col-sm-8'}>
                                                            <small>
                                                                يفضل تاريخ صلاحيه حديث
                                                            </small>
                                                        </div>
                                                        <div className={'col-sm-4'}>
                                                            <small>
                                                                الملاحظات
                                                            </small>
                                                        </div>
                                                    </div>
                                                    <hr/>
                                                </div>
                                                <div className={''}>
                                                    <div className={'row'} dir={'ltr'}>

                                                        <div className={'col-sm-8'}>

                                                            <small dir={'rtl'}>
                                                                <strong>
                                                                    2.50
                                                                </strong>
                                                                {" "}
                                                                ريال
                                                            </small>

                                                        </div>
                                                        <div className={'col-sm-4'}>
                                                            <small>
                                                                ربح التظبيق
                                                            </small>
                                                        </div>
                                                    </div>
                                                    <hr/>
                                                </div>
                                                <div className={''}>
                                                    <div className={'row'} dir={'ltr'}>

                                                        <div className={'col-sm-8'}>

                                                            <small dir={'rtl'}>
                                                                <strong>
                                                                    22.50
                                                                </strong>
                                                                {" "}
                                                                ريال
                                                            </small>

                                                        </div>
                                                        <div className={'col-sm-4'}>
                                                            <small>
                                                                المجموع
                                                            </small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </>
                                )}
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
                                        <SearchIcon onClick={getFocus}/>
                                    </h2>
                                </Col>
                                <Col xs={12} md={12}>
                                    <Form.Control
                                        type="search"
                                        ref={refInput}
                                        className={'input-search'}
                                        placeholder={`اسم الطالب`}
                                        onChange={handleChangeSearchInput}
                                    />
                                </Col>
                            </Row>
                            {!flag ? <Col className={'row delivery-section-mob text-center'}>
                                <h1>
                                    <DeliverIcon/>
                                </h1>

                                <h4>
                                    يجب عليك اختيار الطالب اولا
                                </h4>
                            </Col> : (
                                <>
                                    <Card className={'search-result'}>
                                        <Card.Header className={'card-header'}>
                                            <div>
                                                <CloseIcon/>
                                                <small>الرقم المقصفي 135</small>
                                                <div className={'profile-pic'}>
                                                    <img
                                                        alt={'profile is loaded'}

                                                        src={`https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg`}/>
                                                    <small>
                                                        محمد بن بدر بن الوشقيري
                                                    </small>
                                                </div>
                                            </div>

                                        </Card.Header>

                                        <div className={'card-body-head'}>
                                            <Card.Body className={"card-body"}>
                                                <Card.Title dir={'rtl'}>منتجات 3</Card.Title>
                                                {[1, 2].map((idx) => {
                                                    return (
                                                        <div className={'box'} key={idx}>
                                                            <div className={'container box-header'}>

                                                                <CloseIconRed/>
                                                                <div className={'box-content'} dir={'rtl'}>

                                                                    <span> شيبسي لايز 150 جرام</span>
                                                                    <small>
                                                                        <img
                                                                            src={"https://z.nooncdn.com/products/tr:n-t_200/v1635618159/N51639465A_1.jpg"}
                                                                            alt={'profile is loaded'}
                                                                            className={'product-img'}
                                                                        />
                                                                    </small>
                                                                    <p>
                                                                        7.50 ريال <AiOutlineClose/>
                                                                        <strong>
                                                                            2
                                                                        </strong>
                                                                        <span className={'price'}>
                                                                            <strong>
                                                                            15.00
                                                                            </strong>
                                                                            ريال
                                                                            </span>


                                                                    </p>

                                                                </div>

                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </Card.Body>
                                        </div>

                                    </Card>
                                    <Card className={'search-result'}>
                                        <Card.Body className={'card-body-head'}>
                                            <div className={''}>
                                                <div className={'row'}>

                                                    <div className={'col-sm-8'}>
                                                        <small>
                                                            يفضل تاريخ صلاحيه حديث
                                                        </small>
                                                    </div>
                                                    <div className={'col-sm-4'}>
                                                        <small>
                                                            الملاحظات
                                                        </small>
                                                    </div>
                                                </div>
                                                <hr/>
                                            </div>
                                            <div className={''}>
                                                <div className={'row'} dir={'ltr'}>

                                                    <div className={'col-sm-8'}>

                                                        <small dir={'rtl'}>
                                                            <strong>
                                                                2.50
                                                            </strong>
                                                            {" "}
                                                            ريال
                                                        </small>

                                                    </div>
                                                    <div className={'col-sm-4'}>
                                                        <small>
                                                            ربح التظبيق
                                                        </small>
                                                    </div>
                                                </div>
                                                <hr/>
                                            </div>
                                            <div className={''}>
                                                <div className={'row'} dir={'ltr'}>

                                                    <div className={'col-sm-8'}>

                                                        <small dir={'rtl'}>
                                                            <strong>
                                                                22.50
                                                            </strong>
                                                            {" "}
                                                            ريال
                                                        </small>

                                                    </div>
                                                    <div className={'col-sm-4'}>
                                                        <small>
                                                            المجموع
                                                        </small>
                                                    </div>
                                                </div>

                                            </div>
                                        </Card.Body>
                                    </Card>
                                </>
                            )}
                        </div>
                    </div>
                </RapperSidebarComponent>
            </Col>
        </>

    )
}


export default Sidebar;