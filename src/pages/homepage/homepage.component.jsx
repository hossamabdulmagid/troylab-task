import {Card} from 'react-bootstrap';
import {ExclamationIcon, PlusIcon, RapperHomePage, RunIcon} from './homepage.styles'

const HomePage = () => {

    return (
        <RapperHomePage className={"container"}>
            <div className={"row"}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((singleProduct, idx) => {
                    return (

                        <div className={"col-sm-3"}>
                            <Card style={{width: '18rem', margin: '5px', padding: '5px', borderRadius: '10px'}}>
                                <Card.Body>
                                    <Card.Title>
                                        <button className={'btn btn-light'} size={'xs'}>
                                                    <span className={'kcal'}>
                                                    <RunIcon/> {" "}
                                                        200 Kcal
                                                    </span>
                                        </button>
                                        <ExclamationIcon/>
                                    </Card.Title>
                                    <div className={'card-img'}>
                                        <img src={'https://cdn.salla.sa/BDYO6CMcN2T5BqxOoOGvUWHSqcHQBd5Rz5jk4SwV.jpg'}
                                             alt={'https://cdn.salla.sa/BDYO6CMcN2T5BqxOoOGvUWHSqcHQBd5Rz5jk4SwV.jpg'}
                                             className={'img'}
                                        />
                                    </div>
                                    <Card.Text>
                                        <span>عصير تفاح 250 مل</span>
                                        <p>
                                            الكمية بالمخزون
                                            {": "}
                                            <span className={'text'}>
                                              5
                                         </span>
                                        </p>
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