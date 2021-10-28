import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import axios from "axios";


import { setCustomer, getCustomer } from "../ActionAndStore/Customer/action";


function Login({ className }) {
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCustomer());
  }, [dispatch]);

  const signUserInFacebook = async (response) => {
    const { name, email, accessToken, userID } = response;
    const user = { name, email, accessToken, userId: userID };
    const res = await axios({
      method: "post",
      url: "http://localhost:5000/auth/signin/facebook",
      data: { user },
    });
  
    localStorage.setItem(`token`, JSON.stringify(res.data.token));
    localStorage.setItem(`name`, JSON.stringify(res.data.user.name));
    localStorage.setItem(`id`, JSON.stringify(res.data.user._id));
    dispatch(setCustomer(res.data));
    history.push("/");
  };
  
  const responseGoogle = async (response) => {
     axios({
      method: "post",
      url: "http://localhost:5000/auth/signin/google",
      data: {tokenId:response.tokenId},
    }).then((res) =>{
      localStorage.setItem(`token`, JSON.stringify(res.data.token));
      localStorage.setItem(`name`, JSON.stringify(res.data.user.name));
      localStorage.setItem(`id`, JSON.stringify(res.data.user._id));
      dispatch(setCustomer(res.data));
    
      history.push("/");
    })

  };


  return (
    <div className={className}>
      <div className="parent">
        <div className="div1">
          <img alt="" src={require("./asset/image1.png").default}></img>
        </div>

        <div className="div2">
          <div className="box">
            <h1>เข้าสู่ระบบ</h1>
            <form id="create-form" className="form">
              <FacebookLogin
                appId="411525907158319"
                fields="name,email,picture"
                scope="public_profile, email"
                callback={signUserInFacebook}
                cssClass="btnFacebook"
                icon="fa-facebook"
              />
              <GoogleLogin
                clientId="292061599755-9ooqp99oqcankjdso51rqt1253s1fjbr.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
                className="btnGoogle"
              />
        
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  className: PropTypes.string,
};

export default styled(Login)`
.btnFacebook { 
  width: 192px;
  height:47px;  
  border-radius: 4px;
  background: #3b5998;
  color:white;
  border:0px transparent;  
  text-align: center;
  margin:5px;
  display: inline-block;
}
.btnGoogle { 
  width: 192px;
  height: 64;  
  border-radius: 4px;
  background: #3b5998;
  color:white;
  border:0px transparent;  
  text-align: center;
  margin:5px;
  display: inline-block;
}
  .parent {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 500px;
    border: 1px solid #005488;
  }

  .div1 {
    display: flex;
    overflow: hidden;
    grid-area: 1 / 2 / 2 / 3;
  }
  .div2 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .box {
    text-align: center;
    margin-top: 200px;
  }
  
  .div1 img {
    width: 120%;
    height: auto;
  }
`;
