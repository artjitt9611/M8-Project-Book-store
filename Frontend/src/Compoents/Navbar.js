import React from "react";
import {Navbar,Nav,Container} from "react-bootstrap";
import "boxicons";
import {Link} from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";

function Navbar_list({className}) {
	

	

	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">ROXY BOOK SEARCH</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/favorite">รายการที่ชื่นชอบ</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="/login">SignIn</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
		</>
	);
}
Navbar_list.propTypes = {
	className: PropTypes.string.isRequired,
};

export default styled(Navbar_list)`
	font-family: "IBM Plex Sans Thai", sans-serif;
	position: relative;
	.brand {
		font-size: 26px;
		font-weight: normal;
	}
	.nav-right {
		display: flex;
		margin-top: 0;
		a {
			padding: 10px 15px;
		}
	}
`;
