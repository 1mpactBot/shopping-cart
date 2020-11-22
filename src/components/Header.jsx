import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {
  Navbar,
  NavbarBrand,
} from "reactstrap";


function Header(props){

  return(
    <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Buy Here</NavbarBrand>
        </Navbar>
      </div>
  );
}

export default Header;
