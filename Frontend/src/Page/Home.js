import axios from "axios";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import PropTypes from "prop-types";
import ProductAll from "../Compoents/Product";

function Home({ className }) {
  const [Book, setBook] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    function get() {
      axios.get("/admin/getBook").then((res) => {
        setBook(res.data);
      });
    }
    get();
  }, []);

  return (
    <div className={className}>
      <div class="parent">
        <div class="div1">

        <form className="form-inline">
            <input
              type="text"
              className="search"
              placeholder="Search by book's name"
            />
          </form>

        </div>
        <div class="div2">
        <div className="col-70">
            <div className="all">
            {Book ? (
            Book.map((data) => {
              return <ProductAll key={data.id} data={data}/>;
              })
          ) : (
            <div>พิมพ์ชื่อหนังสือที่ต้องการหา</div>
          )}
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

Home.propTypes = {
  className: PropTypes.string,
  books: PropTypes.object,
};

export default styled(Home)`
  overflow: hidden;
  width: 100%;
  .row {
    display: flex;
    padding-top: 1rem;
    justify-content: center;
  }
  .rowtwo {
    margin-left: 15%;
    h1 {
      margin-top: 2rem;
      font-size: 22px;
      font-weight: bold;
    }
    .new,
    .hit {
      display: flex;
      flex-direction: row;
    }
    .hit {
    }
  }
  .col-70 {
    padding-top: 5rem;
    margin: 3rem 8rem 8rem 8rem;

    h1 {
      font-size: 28px;
      font-weight: bold;
    }
    .all {
      display: flex;
      flex-wrap: wrap;
      border: 1px solid #d4caca;
      border-radius: 10px;
      padding: 10px;
    }
  }
  .parent {
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 1fr 2fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 1 / 3 / 2; }
  margin-bottom: 50px;
  width: 98%;

  form.form-inline {
    padding-top:30px;
    text-align: center;
    margin-bottom: 2rem;
  }
  input.search {
    font-family: "IBM Plex Sans Thai", sans-serif;
    padding: 20px;
    border-radius: 12px;
    font-size: 16px;
    width: 40%;
    justify-content: center;
    transition: border 0.3s;
  }
  input.search:focus {
    outline: none;
    border-radius: 12px;
    border: 2px solid #ffc531;
    transition: border 0.3s;
    font-family: "IBM Plex Sans Thai", sans-serif;
    padding: 20px;
    font-size: 16px;
    width: 40%;
    justify-content: center;
  }
`;