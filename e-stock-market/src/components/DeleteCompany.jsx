import { Button } from "@mui/material";
import { useState } from "react";
import { deleteCompanyByCompanyCode } from "../api/companyApi";
import Dropdown from "../common/Dropdown";
import HomeButton from "./HomeButton";
import "../styles/DeleteCompany.css";
import CompanyTable from "./CompanyTable";

const DeleteCompany = ({ companies, reload }) => {
  const [companyCode, setCompanyCode] = useState("");
  const [deleteResult, setDeleteResult] = useState("");

  const handleDropdownChange = (e) => {
    setCompanyCode(e.target.value);
  };

  const deleteCompany = () => {
    deleteCompanyByCompanyCode(companyCode)
      .then((result) => {
        setDeleteResult(result.data);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  const clear = () => {
    setDeleteResult("");
    reload("true");
  };

  return (
    <>
      <div className="deleteTitle">
        <h1 style={{ color: "blue" }}>Please Select Company to Delete</h1>
      </div>
      {companies && (
        <>
          <div className="deleteInputs">
            <Dropdown
              className="deleteDropdown"
              options={companies}
              dropdownValue={companyCode}
              onChange={handleDropdownChange}
            />

            <div className="deleteSubmit">
              <Button variant="contained" onClick={deleteCompany}>
                Delete Company
              </Button>
            </div>
          </div>
        </>
      )}
      {!!deleteResult && (
        <div className="deleteResult">
          <CompanyTable company={deleteResult} />
        </div>
      )}
      <div className="clearButton">
        <Button variant="contained" onClick={clear}>
          Clear Delete Result
        </Button>
      </div>
      <HomeButton />
    </>
  );
};

export default DeleteCompany;
