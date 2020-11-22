import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Row,Col,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from "reactstrap";

const MyCard = (props) => {
  return (
    <Col xs="6" md="4">
      <Card style={{ margin:"5px", backgroundColor: "#333", borderColor: "#333" , color:"#fff" }}>
        <CardImg top width="100%" src={props.image} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardText>Price: Rs {props.cost}</CardText>
          <Button color="primary" onClick={props.onClick}>Add to Cart</Button>
        </CardBody>
      </Card>
      </Col>
  );
};

export default MyCard;
