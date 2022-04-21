import {Card} from 'react-bootstrap';

const HomePage = () => {

    return (
        <div>
            <div className={"container"}>
                <div className={"row"}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(idx => {
                        return (
                            <>
                                <div className={"col-sm-3"}>
                                    <Card style={{width: '18rem', margin: '5px', padding: '5px', borderRadius: '5px'}}>
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                            <Card.Text>
                                                Some quick example text to build on the card title

                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default HomePage;