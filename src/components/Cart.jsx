import React from "react";
import {Button} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

function Cart(props){

  return(
    <div>
    <h2>Shopping Cart</h2>

    <Button color="success">Checkout</Button>
    </div>
  );
}


export default Cart;
