import {useEffect, useState} from "react";
import {connect} from 'react-redux';
import {doGetPosts} from "../../redux/posts/postsAction";

import {Col, FormControl, Spinner} from "react-bootstrap";
import {BUTTON} from "../homepage/homepage.styles";
import {CloseIcon, Rapper, RapperShoppingComponent, SearchIcon} from "../shopping/shopping.styles";
import InputGroup from "react-bootstrap/InputGroup";

import ProductlistComponent from './productlist.component'

const ShoppingComponent = ({doGetPosts, loading, allPosts}) => {


    const filterPosts = (filterItem) => {
        if (!filterItem) {
            return allPosts;
        }
        return allPosts
            .filter((allPosts) => allPosts &&
                (allPosts.title.includes(filterItem) || allPosts.description.includes(filterItem) || allPosts.category.includes(filterItem)));
    }

    const [filterItem, setFilterItem] = useState("");

    const filterdPosts = filterPosts(filterItem);

    const updatedFilterHandler = (e) => {
        setFilterItem(e.target.value);
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
                                    onChange={updatedFilterHandler}
                                    type="search"


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
                        {filterdPosts.length === 0 && !loading ?
                            <div className={'container'}>
                                <h2>No post found matching your filter</h2>
                            </div>


                            : null}
                        {!loading ?


                            <ProductlistComponent allPosts={filterdPosts}/>
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