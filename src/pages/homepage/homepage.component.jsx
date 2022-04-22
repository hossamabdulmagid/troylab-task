import {Card} from 'react-bootstrap';
import {
    BurgerIcon,
    BUTTON,
    DrinkIcon,
    ExclamationIcon,
    PizzaIcon,
    PlusIcon,
    RapperHomePage,
    RunIcon,
    SandwichIcon
} from './homepage.styles'

const HomePage = () => {

    return (
        <RapperHomePage className={"container"}>
            <div className={"row"}>
                <div className={''} dir={'ltr'}>
                    <div className={'filter-section'}>
                        <BUTTON variant="light">سندوتشات {" "}<SandwichIcon/></BUTTON>{' '}
                        <BUTTON variant="light"> مشروبات{' '}<DrinkIcon/></BUTTON>
                        <BUTTON variant="light"> برجر {' '}<BurgerIcon/></BUTTON>{' '}
                        <BUTTON variant="light"> بيتزا{' '}<PizzaIcon/></BUTTON>{' '}
                        <BUTTON variant="success">الكل</BUTTON>
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
                                            alt={'logo-still-loading'}
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

export default HomePage;