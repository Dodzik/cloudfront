import {Button, Col, Container, ListGroup, Row} from "react-bootstrap";
import React from "react";
import {useState} from "react";


function GroupListItem (context) {


    return (
        <ListGroup.Item>
            <Container>
                <Row>
                    <Col className="d-flex fs-6 mt-1">
                        {context.name}
                    </Col>
                    <Col className="d-flex justify-content-end">
                    </Col>
                </Row>
            </Container>
        </ListGroup.Item>
    )

}

export default GroupListItem;
