import React from "react";
import {Button, FormControl} from "react-bootstrap";
import "boxicons";
import {Link} from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";

function Navbar_list({className}) {
	

	

	return (
		<>
			<header className={className}>
			    <Link to="/login">
					<Button variant="primary">เข้าสู่ระบบ</Button>
				</Link>
				<form className="d-flex">
					<FormControl
						type="search"
						placeholder="Search"
						className="search"
						aria-label="Search"
						style={{paddingRight: "140px"}}
					/>
					<Button style={{color: "#fff", background: "#e65100", border: "none"}}>Search</Button>
				</form>
				
			</header>
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
