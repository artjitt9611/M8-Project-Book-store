import axios from "axios";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import PropTypes from "prop-types";

function Favorite({ className }) {
  
  return (
    <div className={className}>
      <div class="parent">
        <div class="div1">
        <div className="col-70">
            <h1>หนังสือทั้งหมด</h1>
            <div className="all">

            </div>
          </div>
        </div>
        
      </div>
      <div>

      </div>
    </div>
  );
}

Favorite.propTypes = {
  className: PropTypes.string,
  books: PropTypes.object,
};

export default styled(Favorite)`
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
grid-template-rows: repeat(2, 1fr) 3fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 4 / 2; }
  margin-bottom: 50px;
  width: 98%;

`;
