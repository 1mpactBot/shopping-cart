import React,{useState, useEffect} from "react";
import {Button, Container, Row, Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
import { toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Header";
import MyCard from "./MyCard";
import CartItem from "./CartItem";
import {data} from "./data";


function App() {
  const [cartItems,setCartItems] = useState([]);
  const [total,setTotal] = useState(0);

  useEffect(
    ()=>{
      checkoutTotal();
    },[cartItems]);

  function checkoutTotal(){
    let totalCost=0;
    for(let i=0; i<cartItems.length; i++){
      totalCost += cartItems[i].cost;
    }
    setTotal(totalCost);
  }

  toast.configure();
  function addToCart(item){
    let isAdded = false;
    for(let i=0; i<cartItems.length; i++){
      if(cartItems[i].id===item.id){
        isAdded=true;
      }
    }
    if(isAdded){
      toast.error("⚠ Already in cart!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Zoom,
      });
    }else{
      setCartItems([...cartItems,item]);
    }

  }

  function removeFromCart(item){
    setCartItems(cartItems.filter((et) => et.id !== item.id));
  }

  function checkout(){
    setCartItems([]);
    toast.success("✓ Order placed successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Zoom,
    });
  }

  return (
    <div className="layout">
    <Header />
    <Container fluid>
      <Row>
      <Col md="8">
      <Container>
        <Row>
          {data.map((item)=>{
            return(
              <MyCard
              id={item.id}
              image={item.smallImage}
              title={item.title}
              cost={item.cost}
              onClick={()=>addToCart(item)}
              />
              );
            })
          }
          </Row>
      </Container>
      </Col>
      <Col md="4">
    <Container>
    <h2>Shopping Cart</h2>
    {
      cartItems.map((item)=>{
        return(
          <CartItem
          id={item.id}
          image={item.image}
          title={item.title}
          cost={item.cost}
          onClick={()=>removeFromCart(item)}
           />
        );
      })
    }
    <h4 style={{color: "#30475e"}}>Your total : Rs {total} </h4>
    <Button onClick={checkout} color="success">Checkout</Button>
    </Container>
    </Col>
    </Row>
    </Container>
    </div>
  );
}

export default App;
