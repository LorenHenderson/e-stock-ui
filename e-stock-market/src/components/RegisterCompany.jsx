import { Button, FormLabel, Input } from "@mui/material";
import { useState } from "react";
import { registerCompany } from "../api/companyApi";
import "../styles/RegisterCompany.css";

const RegisterCompany = () => {
  const [company, setCompany] = useState({
    companyCode: "",
    companyName: "",
    companyCEO: "",
    companyTurnover: 0,
    companyWebsite: "",
    stockExchange: "",
  });
  const [saveStatus, setSaveStatus] = useState();

  const submit = (e) => {
    e.preventDefault();
    registerCompany(company).then((response) => {
      if (response) setSaveStatus("true");
      else setSaveStatus("false");
    });
    console.log(company);
  };
  return (
    <>
      <div className="messages">
        {saveStatus === "true" && (
          <h3 style={{ color: "green" }}>
            Saved successfully. Please visit All Companies to view.
          </h3>
        )}
        {saveStatus === "false" && (
          <h3 style={{ color: "red" }}>Please try save again.</h3>
        )}
      </div>
      <div className="registerCompany">
        <div className="registerTitleDiv">
          <h1>Register a Company</h1>
        </div>
        <form className="form" onSubmit={(e) => submit(e)}>
          <div className="Input">
            <FormLabel className="companyCode">Company Code</FormLabel>
            <Input
              required={true}
              onInput={(event) => {
                setCompany({ ...company, companyCode: event.target.value });
              }}
            ></Input>
          </div>

          <div className="Input">
            <FormLabel className="companyName">Company Name</FormLabel>
            <Input
              required={true}
              onInput={(event) => {
                setCompany({ ...company, companyName: event.target.value });
              }}
            ></Input>
          </div>
          <div className="Input">
            <FormLabel className="companyCEO">Company CEO</FormLabel>
            <Input
              required={true}
              onInput={(event) => {
                setCompany({ ...company, companyCEO: event.target.value });
              }}
            ></Input>
          </div>
          <div className="Input">
            <FormLabel>Company Turnover</FormLabel>
            <Input
              required={true}
              onInput={(event) => {
                setCompany({ ...company, companyTurnover: event.target.value });
              }}
            ></Input>
          </div>
          <div className="Input">
            <FormLabel className="companyWebsite">Company Website</FormLabel>
            <Input
              required={true}
              onInput={(event) => {
                setCompany({ ...company, companyWebsite: event.target.value });
              }}
            ></Input>
          </div>
          <div className="Input">
            <FormLabel className="stockExchange">Stock Exchange</FormLabel>
            <Input
              required={true}
              onInput={(event) => {
                setCompany({ ...company, stockExchange: event.target.value });
              }}
            ></Input>
          </div>
          <div className="registerSubmit">
            <Button variant="contained" type="submit">
              Register
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterCompany;
