import * as React from "react";
import { useState } from "react";
import { getAllCompanies } from "../api/companyApi";
import Button from "@mui/material/Button";

const StockMarket = () => {
  const [companies, setCompanies] = useState([]);
  let data;
  const getCompanies = () => {
    setCompanies(getAllCompanies());
  };
  return (
    <>
      <Button variant="contained" onClick={getCompanies}>
        GET
      </Button>
    </>
  );
};
export default StockMarket;
