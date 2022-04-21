import {Card} from 'react-bootstrap';
import {ExclamationIcon, PlusIcon, RapperHomePage, RunIcon} from './homepage.styles'

const HomePage = () => {

    return (
        <RapperHomePage className={"container"}>
            <div className={"row"}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map(idx => {
                    return (
                        <div className={"col-sm-3"} key={idx}>
                            <Card style={{width: '18rem', margin: '5px', padding: '5px', borderRadius: '10px'}}>
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
                                        <span>عصير تفاح 250 مل</span>
                                        <div>
                                            الكمية بالمخزون
                                            {": "}
                                            <span className={'text'}>
                                               {5}
                                         </span>
                                        </div>
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