import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const CartItem=(props)=>{

  return(
    <div className="cartItem">
      <Card style={{margin:"5px", backgroundColor: "#333", borderColor: "#333" ,color:"#fff", display:"flex", flexFlow:"row"}}>
      <div>
        <CardImg top style={{width:"80%"}} src={props.image} alt="Card image cap" />
      </div>
      <span />
      <div>
        <CardBody>
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardText>Price: Rs {props.cost}</CardText>
          <Button color="primary" onClick={props.onClick}>Remove</Button>
        </CardBody>
        </div>
      </Card>
    </div>
  );
}


export default CartItem;
