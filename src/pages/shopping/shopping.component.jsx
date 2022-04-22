import {useEffect, useState} from "react";
import {connect} from 'react-redux';
import {doGetPosts} from "../../redux/posts/postsAction";

import {Col, FormControl, Spinner} from "react-bootstrap";
import {BUTTON} from "../homepage/homepage.styles";
import {CloseIcon, Rapper, RapperShoppingComponent, SearchIcon,DishIcon} from "../shopping/shopping.styles";
import InputGroup from "react-bootstrap/InputGroup";

import ProductlistComponent from './productlist.component'

const ShoppingComponent = ({doGetPosts, loading, allPosts}) => {

    const filterPosts = ({text = "", category = "all"}) => {
        return allPosts
            .filter((allPosts) => {
                if (!text) return true;

                return allPosts &&
                    (allPosts.title.includes(text) || allPosts.description.includes(text) || allPosts.category.includes(text))
            })
            .filter((allPosts) => {
                if (category == "all") return true;
                return allPosts.category == category;
            });
    }


    const [filterItem, setFilterItem] = useState({
        text: "",
        category: "all"
    });

    const filterdPosts = filterPosts(filterItem);

    const updatedFilterHandler = (e) => {
        setFilterItem({...filterItem, text: e.target.value});
    }


    useEffect(() => {
        doGetPosts()
    }, [doGetPosts])


    const getUnique = (allPosts, comp) => {
        // store the comparison  values in array
        const unique = allPosts
            .map((e) => e[comp])
            // store the indexes of the unique objects
            .map((e, i, final) => final.indexOf(e) === i && i)
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
                                    onChange={updatedFilterHandler}
                                    type="search"
                                />
                                <InputGroup.Text id="inputGroup-sizing-default">
                                    <h5>
                                        <DishIcon/>
                                    </h5>
                                </InputGroup.Text>

                            </InputGroup>
                        </Col>
                    </RapperShoppingComponent>

                    <div dir={'ltr'}>
                        <div className={'filter-section'}>
                            <BUTTON variant="light" size={'sm'} onClick={() => setFilterItem({
                                ...filterItem,
                                category: "all"
                            })}>
                                <CloseIcon/>{"All"}
                            </BUTTON>
                            {getUnique(allPosts, "category").map((singleCategory, idx) => {
                                return (
                                    <BUTTON variant="light" size={'sm'} key={idx} onClick={() => setFilterItem({
                                        ...filterItem,
                                        category: singleCategory.category
                                    })}>
                                        <CloseIcon/>{singleCategory.category}
                                    </BUTTON>

                                )
                            })}
                        </div>
                    </div>
                    <div className="card-group">
                        {filterdPosts.length === 0 && !loading ?
                            (<div className={'container'}>
                                <h2>No post found matching your filter</h2>
                            </div>)
                            : null}
                        {!loading ?
                            (<ProductlistComponent allPosts={filterdPosts}/>) :
                            (<div className={'container text-center'}>
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </div>)
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