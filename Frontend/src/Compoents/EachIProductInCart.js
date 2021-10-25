import React from "react";
import styled from "styled-components";
import axios from "axios";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { fetchCart} from "../ActionAndStore/Cart/action";


function Cart({ className, data }) {
  const [user] = React.useState(JSON.parse(localStorage.getItem("id")));
  const [token] = React.useState(JSON.parse(localStorage.getItem("token")));
  const dispatch = useDispatch();

  function DeleteItem(e, data_detail) {
    let config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    let data = {
      Customer_id: user,
      Book_id: data_detail,
    };
    Swal.fire({
      title: "โปรดยืนยัน",
      text: "ต้องการที่ละลบรายการนี้ออกจากตะกร้าหรือไม่",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ใช่",
      cancelButtonText: "ไม่",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post("/user/DeleteProduct",data,config).then((res) => { 
          dispatch(fetchCart(res.data));
        }).catch((error) => {
            console.log(error);
          });
      }
    });
  }

  return (
    <tr className={className}>
      <td>
        <img src={data.imageUrl} alt={data.name} className="imgBook" />
      </td>
      <td>{data.name}</td>
      <td>{data.price}</td>
      <td>{data.quantity}</td>
      <td>{data.subtotal}</td>
      <td>
        <box-icon
          name="trash"
          type="solid"
          color="#f04e4e"
          onClick={(e) => DeleteItem(e, data._id)}
        />
      </td>
    </tr>
  );
}
Cart.propTypes = {
	className: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default styled(Cart)`
  img {
    width: 80px;
    box-shadow: 0px 0px 6px black;
  }
  input {
    text-align: center;
  }
`;
