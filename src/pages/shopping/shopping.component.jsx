import {useEffect} from "react";
import {connect} from 'react-redux';
import {doGetPosts} from "../../redux/posts/postsAction";

import {Card, Col, FormControl, Spinner} from "react-bootstrap";
import {BUTTON, ExclamationIcon} from "../homepage/homepage.styles";
import {CloseIcon, PlusIcon, Rapper, RapperShoppingComponent, RunIcon, SearchIcon} from "../shopping/shopping.styles";
import InputGroup from "react-bootstrap/InputGroup";

const ShoppingComponent = ({doGetPosts, loading, allPosts}) => {
    useEffect(() => {
        doGetPosts()
    }, [doGetPosts])


    const getUnique = (allPosts, comp) => {
        // store the comparison  values in array
        const unique = allPosts
            .map((e) => e[comp])
            // store the indexes of the unique objects
            .map((e, i, final) => final.indexOf(e) === i && i)

            // eliminate the false indexes & return unique objects
            .filter((e) => allPosts[e])
            .map((e) => allPosts[e]);

        return unique;
    };

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
                            {getUnique(allPosts, "category").map((singleCategory, idx) => {
                                return (
                                    <BUTTON variant="light" size={'sm'} key={idx}>
                                        <CloseIcon/>{singleCategory.category}
                                    </BUTTON>

                                )
                            })}
                        </div>
                    </div>
                    <div className="card-group">

                        {!loading ?
                            allPosts && allPosts
                                .filter((singlePost, idx) => idx < 25)
                                .map((singlePost, idx) => {
                                    return (
                                        <div className={"col-sm-3"} key={idx}
                                             style={{marginBottom: '5px', padding: '15px'}}>
                                            <Card className={'card  h-100'}>

                                                <Card.Body>
                                                    <Card.Title className={'btn btn-light pull-left'}>
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
                                                        <small>
                                                            {singlePost.title}
                                                        </small>
                                                        <small className={'d-block'}>
                                                            count
                                                            {": "}
                                                            <span className={'text'}>
                                                             {singlePost.rating.count}
                                                         </span>
                                                        </small>
                                                    </Card.Text>
                                                    <div className={'footer'}>
                                                    </div>
                                                </Card.Body>
                                                <div className={'card-footer'}>
                                                    <PlusIcon/>
                                                    <span className={'kcal'} dir={"rtl"}>${singlePost.price}</span>
                                                </div>
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