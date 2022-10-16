import { useEffect, useState } from "react";
import { getAllCompanies } from "../../api/companyApi";
import CompanySearch from "../../components/CompanySearch";
import HomeButton from "../../components/HomeButton";

const SearchCompanyPage = () => {
  const [companies, setCompanies] = useState();

  useEffect(() => {
    getAllCompanies().then((company) => {
      setCompanies(company);
    });
  }, []);

  return (
    <>
      <CompanySearch companies={companies} />
      <HomeButton />
    </>
  );
};

export default SearchCompanyPage;
