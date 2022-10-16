import { useEffect, useState } from "react";
import { getAllCompanies } from "../api/companyApi";
import "../styles/ShowCompany.css";
import CompanyTable from "./CompanyTable";

const ShowCompanies = () => {
  const [companies, setCompanies] = useState();

  useEffect(() => {
    getAllCompanies().then((c) => {
      setCompanies(c);
    });
  }, []);

  return (
    <>
      <h1>Companies Table</h1>
      <hr className="horizontalRow" />
      <CompanyTable companies={companies} />
    </>
  );
};
export default ShowCompanies;
