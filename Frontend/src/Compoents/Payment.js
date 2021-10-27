import styled from "styled-components";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { fetchCart } from "../ActionAndStore/Cart/action";
import GetCart2 from "./EachIProductInCart2";
import CheckoutButton from "./ButtonCreaditCard";
import React from "react";

import { setAddress, getAddress } from "../ActionAndStore/Address/action";
import { setName } from "../ActionAndStore/Name/action";
import { setPhone } from "../ActionAndStore/Phone/action"

function ShowCart({ className }) {
  const [user] = useState(JSON.parse(localStorage.getItem("id")));
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  

  useEffect(() => {
    const data = { Customer_id: user };
    const get = () => {
      axios
        .post("/user/GetCartById", data)
        .then((res) => {
          dispatch(fetchCart(res.data));
        })
        .catch(() => {});
    };
    if (user) get();
  }, [dispatch, user]);

  if (!user) {
    return <Redirect to="/login" />;
  }

  

  return (
    <div className={className}>
      <div className="row">
        <div className="col-70">
          <h1> ตะกร้าสินค้า </h1>
          <table className="ShowBook">
            <thead>
              <tr>
                <th>ภาพหนังสือ</th>
                <th>ชื่อหนังสือ</th>
                <th>ราคา</th>
                <th>จำนวน</th>
                <th>รวม</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.products ? (
                cart.products.map((data) => {
                  return <GetCart2 key={data.id} data={data} />;
                })
              ) : (
                <tr>
                  <td>Loading . . .</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="col-30">
          <div className="box">
			         <CheckoutButton/>
          </div>
        </div>
      </div>
    </div>
  );
}

ShowCart.propTypes = {
  className: PropTypes.string,
  cart: PropTypes.object,
};

export default styled(ShowCart)`
  
  overflow: hidden;
  margin-bottom: 50px;
  .row {
    position: relative;
    margin-left: 2rem;
    h1 {
      font-family: "IBM Plex Sans Thai", sans-serif;
      padding-top: 50px;
      margin-left: 6rem;
      font-weight: bold;
      font-size: 28px;
      text-align: left;
      margin-bottom: 2.5rem;
    }
    .col-70 {
      width: 60%;
      margin-bottom: 4rem;
      .ShowBook {
        border: 1px solid #cecccc;
        border-collapse: collapse;
        width: 80%;
        margin: 2rem;
        table-layout: fixed;
        thead tr th {
          text-align: center;
          font-size: 20px;
          font-weight: bold;
          padding: 20px;
          border-bottom: 1px solid #cecccc;
        }
        td {
          color: black;
          font-size: 18px;
          text-align: center;
          border-bottom: 1px solid #e5e5e5;
          padding: 25px 10px 20px 10px;
        }
      }
    }

    .col-30 {
      width: 30%;
      margin-top: 8rem;
      .box {
        border: 1px solid #cecccc;
        padding: 14px;
        width: 400px;
        border-radius: 5px;
      }
    }
  }
`;
