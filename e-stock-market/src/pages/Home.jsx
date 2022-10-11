import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { getAllCompanies } from "../api/companyApi";
import Dropdown from "../common/Dropdown";
import StockSearch from "../components/StockSearch";
import "./Home.css";

const Home = () => {
  const [companies, setCompanies] = useState();
  const [seachingCompany, setSearchingCompany] = useState();
  const [stockCompany, setStockCompany] = useState();

  useEffect(() => {
    getAllCompanies().then((company) => {
      setCompanies(company);
      console.log(company);
    });
  }, []);

  const handleDropdownChange = (event) => {
    setSearchingCompany(event.target.value);
    console.log("C val: ", event.target.value);
  };

  const handleStockDropdownChange = (event) => {
    setStockCompany(event.target.value);
    console.log("stock val: ", event.target.value);
  };

  const searchCompany = (e) => {
    //call search
  };

  return (
    <>
      <div className="buttonsDiv">
        <Button variant="contained">Add Company</Button>
        <Button variant="contained">List All Companies</Button>
        <div className="searchDiv">
          {companies && (
            <Dropdown
              className="companySearchSelect"
              options={companies}
              dropdownValue={seachingCompany}
              onChange={handleDropdownChange}
            />
          )}
          <Button variant="contained" onChange={searchCompany}>
            Search Company
          </Button>
        </div>
      </div>

      <br />
      <h2>Retireve Stock Details For Company</h2>
      <br />
      <StockSearch
        dropdownOptions={companies}
        dropdownValue={seachingCompany}
        // ocChange={handleStockDropdownChange}
      />
    </>
  );
};

export default Home;
