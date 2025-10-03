import React from "react";
import {Card, CardBody, CardImg, CardText, CardTitle, Row, Col} from "reactstrap";

export default function MenuItem({item}){
    let fontClass = '';

    return(
        <Card className="mb-4 shadow-sm" >
            <Row noGutters id="menu-row" >
                <Col md="8" style={{height:"100%", borderRadius:"15%"}}>
                    <CardImg top style={{height:"100%"}} src={item.image} alt={item.name} />
                </Col>
                <Col md="4">
                    <CardBody>
                        <CardTitle tag="h5" className={fontClass}>{item.name}</CardTitle>
                        <CardText className={fontClass}>{item.description}</CardText>
                        <div className="d-flex justify-content-between align-items-end">
                            <strong>{item.price}</strong>
                        </div>
                    </CardBody>
                </Col>
            </Row>
        </Card>
    )





}