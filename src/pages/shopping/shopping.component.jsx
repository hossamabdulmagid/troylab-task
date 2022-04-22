import {useEffect} from "react";
import {connect} from 'react-redux';
import {doGetPosts} from "../../redux/posts/postsAction";

import {Card, Col, FormControl, Spinner} from "react-bootstrap";
import {BUTTON, ExclamationIcon, PlusIcon, RunIcon} from "../homepage/homepage.styles";
import {CloseIcon, RapperShoppingComponent, SearchIcon,Rapper} from "../shopping/shopping.styles";
import InputGroup from "react-bootstrap/InputGroup";

const ShoppingComponent = ({doGetPosts, loading, allPosts}) => {
    useEffect(() => {
        doGetPosts()
    }, [doGetPosts])

    return (
        <Rapper>
        <div className={'container text-center'}>
            <div className={'row'}>
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

                {!loading ?
                    allPosts && allPosts
                        .filter((singlePost, idx) => idx < 25)
                        .map((singlePost, idx) => {
                            return (
                                <div className={"col-sm-3"} key={idx} style={{marginBottom: '5px', padding: '15px'}}>
                                        <Card className={'card'}>

                                            <Card.Body>
                                                <Card.Title className={'btn btn-light kcal'}>
                                                    <RunIcon/> {" "}
                                                    200 Kcal
                                                </Card.Title>
                                                <ExclamationIcon/>
                                                <div className={'card-img'}>
                                                    <img
                                                        src={singlePost.image}
                                                        alt={singlePost.title}
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
                        })
                    :
                    <div className={'container text-center'}>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>

                    </div>
                }

            </div>
        </div>
        </Rapper>
    )
}


const mapStateToProps = state => ({
    allPosts: state.posts.posts,
    loading: state.posts.loading,
})


const mapDispatchToProps = dispatch => ({
    doGetPosts: () => dispatch(doGetPosts())
})
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingComponent);