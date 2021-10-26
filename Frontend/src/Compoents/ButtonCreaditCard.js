import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Script from "react-load-script";
function ButtonCreditCard({ className, name, address, phone }) {
  const cart = useSelector((state) => state.cart);

  let OmiseCard = window.OmiseCard;
  OmiseCard.configure({
    publicKey: "pkey_test_5pmncburbof4u8lmcmy",
    currency: "thb",
    frameLabel: "Roxy Shop",
    submitLabel: "PAY NOW",
    buttonLabel: "Pay with Omise",
  });

  function creditCardConfigure() {
    OmiseCard.configure({
      defaultPaymentMethod: "credit_card",
      otherPaymentMethod: [],
    });
    OmiseCard.configureButton("#credit_card")
    OmiseCard.attach();

  }
  function omiseCardHandler() {
    OmiseCard.open({
      amount: 10000,
      frameDescription:'Invoice #3847',
      onCreateTokenSuccess: (token) => {
        console.log(token)
        /* Handler on token or source creation.  Use this to submit form or send ajax request to server */
      },
      onFormClosed: () => {
        /* Handler on form closure. */
      },
    })
  }

  function onSubmit(e) {
    e.preventDefault();
    creditCardConfigure();
    omiseCardHandler();
  }

  return (
    <div className={className}>
      <div className="btn">
        <button id="credit_card" onClick={(e) => onSubmit(e)}>CheckOut</button>
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
