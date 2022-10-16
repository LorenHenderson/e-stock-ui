import { Button } from "@mui/material";
import { useState } from "react";
import { getCompanyByCompanyCode } from "../api/companyApi";
import Dropdown from "../common/Dropdown";
import CompanyTable from "./CompanyTable";
import "../styles/CompanySearch.css";

const CompanySearch = ({ companies }) => {
  const [searchingCompany, setSearchingCompany] = useState();
  const [responseCompany, setResponseCompany] = useState();

  const handleDropdownChange = (event) => {
    setSearchingCompany(event.target.value);
  };

  const searchCompany = (e) => {
    getCompanyByCompanyCode(searchingCompany).then((data) => {
      setResponseCompany(data);
    });
  };

  return (
    <>
      <h1 className="companySearchTitle">Search for a Company</h1>
      <div className="companySearchInputs">
        {companies && (
          <Dropdown
            className="companySearchSelect"
            options={companies}
            dropdownValue={searchingCompany}
            onChange={handleDropdownChange}
          />
        )}
        <Button variant="contained" onClick={searchCompany}>
          Search Company
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setResponseCompany(undefined);
          }}
        >
          Clear
        </Button>
      </div>
      {responseCompany && (
        <div className="searchCompanyTable">
          <CompanyTable company={responseCompany} />
        </div>
      )}
    </>
  );
};

export default CompanySearch;
