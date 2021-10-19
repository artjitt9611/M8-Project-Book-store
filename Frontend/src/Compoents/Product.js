import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

function ProductAll({ className, data }) {

    let thumbnail = '';
    if (data.volumeInfo.imageLinks) {
    thumbnail = data.volumeInfo.imageLinks.thumbnail;
}
  return (
    <div className={className}>
      <div className="box">
        <img src={thumbnail} className="imgBookk" />
          <h2>{data.volumeInfo.title}</h2>
        <h3>{data.volumeInfo.publisher}</h3>
        <button >
          เพิ่มไปยังรายการที่ชื่นชอบ
        </button>
      </div>
    </div>
  );
}

ProductAll.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
};

export default styled(ProductAll)`
  overflow: hidden;
  margin: 5px;
  border-bottom: 1px solid #ccc;
  div.box {
    padding: 20px;
    text-align: center;
    width: 24rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;  
            .imgBookk {
      padding: 5px;
      width: 150px;
      height: 220px;
      box-shadow: 0px 0px 4px black;
      transition: 0.5s;
    }
    .imgBookk:hover {
      padding: 5px;
      width: 210px;
      height: 290px;
      box-shadow: 0px 0px 6px black;
      transition: 0.7s;
    }
    h2 {
      padding-top: 15px;
      font-size: 16px;
      font-weight: bold;
    }
    a {
      color: black;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    h3 {
      font-size: 14px;
    }
    button {
      font-size: 14px;
      padding: 8px;
      border: 1px solid #005488;
      border-radius: 5px;
      background-color: white;
      bottom: 500px;
    }
    button:hover {
      border: 1px solid white;
      background-color: #005488;
      color: white;
      transition: 0.5s;
    }
  }
`;
