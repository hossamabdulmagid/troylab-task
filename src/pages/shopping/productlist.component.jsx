import {Card} from "react-bootstrap";
import {PlusIcon, RunIcon} from "./shopping.styles";
import {ExclamationIcon} from "../homepage/homepage.styles";

const ProductlistComponent = ({allPosts}) => {
    return (
        allPosts
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
    )
}

export default ProductlistComponent;