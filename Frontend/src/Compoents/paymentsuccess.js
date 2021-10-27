import styled from "styled-components";
import PropTypes from "prop-types";
import { useState} from "react";
import { Link, Redirect } from "react-router-dom";
import React from "react";

function ShowCart({ className }) {
  const [user] = useState(JSON.parse(localStorage.getItem("id")));
  if (!user) {
    return <Redirect to="/login" />;
  }

  return (
    <div className={className}>
      <div className="row">
        <div className="col-100">
          <h1> ทำรายการสำเร็จ </h1>
          <img alt="" src={require("./asset/image3.png").default}></img>
          <h2> ขอบคุณสำหรับการซื้อสินค้าจากทางร้านเราค่ะ </h2>
          <Link to="/">
            <button>ซื้อสินค้าต่อ</button>
          </Link>
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
  h1 {
    font-family: "IBM Plex Sans Thai", sans-serif;
    padding-top: 150px;
    font-weight: bold;
    font-size: 28px;
    text-align: left;
    margin-bottom: 2.5rem;
    text-align: center;
  }
  h2 {
    font-family: "IBM Plex Sans Thai", sans-serif;
    padding-top: 50px;
    font-weight: bold;
    font-size: 25px;
    text-align: left;
    margin-bottom: 2.5rem;
    text-align: center;
  }
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 10%;
  }
  button {
    border: 1px solid white;
    background-color: #005488;
    color: white;
    transition: 0.5s;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 10%;
  }
`;
