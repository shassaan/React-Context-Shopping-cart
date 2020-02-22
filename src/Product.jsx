import React from 'react'
import logo from './logo.svg'
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';
import AddToCart from './AddToCart';
const Product = prop => {
    const { title = "N/A", description = "N/A", id = -1 } = prop.product || {};
    return (
        <>
            <div className="container p-2 w-100">
                <Card className="p-2 text-center">
                    <CardBody>
                        <CardTitle>{title}</CardTitle>

                    </CardBody>

                    <CardBody>
                        <img width="100%" height="150" className="img-thumbnail" src={logo} alt="Card image cap" />
                        <CardText>{description}</CardText>
                        <AddToCart id={id} />
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default Product