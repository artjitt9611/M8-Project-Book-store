import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useRef,useEffect} from "react";

function ButtonCreditCard({className}) {
  const dispatch = useDispatch();
 
  const cart = useSelector((state) => state.cart);
  const address = useSelector((state) => state.address);
  const name = useSelector((state) => state.name);
  const phone = useSelector((state) => state.phone);
  const [token] = React.useState(JSON.parse(localStorage.getItem("token")));
  const history = useHistory();

  function createCreditCardCharge(cart,address,name,phone) {
    
    let config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    console.log(address,name,phone)
  let track = {name:name,address:address,phone:phone}
  let data = {order: cart,address:track}
  console.log(data)
   
  
		axios.post("http://localhost:5000/user/Checkout",data,config).then((res) =>{
      history.push("/");
    })
    
	  
	} 
 

  const paypal = useRef()

  useEffect(() => {
   window.paypal.Buttons({
     createOrder:(data,actions,err)=>{
       return actions.order.create({
         intent:"CAPTURE",
         purchase_units:[
           {
             description:"Cool looking table",
             amount:{
               currency_code:"THB",
               value:cart.total
             },
           },
         ],
       })
     },
     onApprove:async(data,actions)=>{
       const order = await actions.order.capture();
       console.log(order)
       createCreditCardCharge(cart,address,name,phone)
     },
     onError:(err)=>{
       console.log(err)
     }

   }).render(paypal.current);
  }, []);

  return (
    <div className={className}>
      <div ref={paypal}>  
      </div>
    </div>
  );
}

ButtonCreditCard.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(ButtonCreditCard)`
  .btn {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }
`;
