import {Card, Col, FormControl} from 'react-bootstrap';
import {CloseIcon, RapperShoppingComponent, SearchIcon} from './shopping.styles'
import {BUTTON, ExclamationIcon, PlusIcon, RapperHomePage, RunIcon,} from '../homepage/homepage.styles'
import InputGroup from 'react-bootstrap/InputGroup'

const ShoppingComponent = () => {

    return (
        <RapperHomePage className={"container"}>
            <div className={"row"}>

                <RapperShoppingComponent>
                    <Col xs={8} md={8} lg={8} xl={8}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">
                                <h5>
                                    <SearchIcon/>
                                </h5>
                            </InputGroup.Text>
                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    </Col>
                </RapperShoppingComponent>


                <div className={''} dir={'ltr'}>
                    <div className={'filter-section'}>
                        <BUTTON variant="light" size={'sm'}><CloseIcon/> طبق متكامل</BUTTON>
                        <BUTTON variant="light" size={'sm'}><CloseIcon/> سندوتشات </BUTTON>{' '}
                    </div>
                </div>
                {[1, 2, 3, 4, 5, 6, 7, 8].map(idx => {
                    return (
                        <div className={"col-sm-3"} key={idx}>
                            <Card className={'card'}>
                                <Card.Body>
                                    <Card.Title className={'btn btn-light kcal'}>
                                        <RunIcon/> {" "}
                                        200 Kcal
                                    </Card.Title>
                                    <ExclamationIcon/>

                                    <div className={'card-img'}>
                                        <img
                                            src={'https://spinneys-egypt.com/index.php/cache/large/product/6435/EXkDm4hb0oEUH3ZDVuJU6hUZ74Kzx7CCrWSaaHbw.jpg'}
                                            alt={'image-still-loading'}
                                            className={'img'}
                                        />
                                    </div>
                                    <Card.Text>
                                        <small>عصير تفاح 250 مل</small>
                                        <small className={'d-block'}>
                                            الكمية بالمخزون
                                            {": "}
                                            <span className={'text'}>
                                               {5}
                                         </span>
                                        </small>
                                    </Card.Text>
                                    <div className={'footer'}>
                                        <PlusIcon/>
                                        <span className={'kcal'} dir={"rtl"}> 7.5 ريال  </span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>

                    )
                })}
            </div>
        </RapperHomePage>
    )
}

export default ShoppingComponent;
