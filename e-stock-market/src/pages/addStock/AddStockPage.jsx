import { useEffect, useState } from "react";
import { getAllCompanies } from "../../api/companyApi";
import AddStock from "../../components/AddStock";
import HomeButton from "../../components/HomeButton";

const AddStockPage = () => {
  const [companies, setCompanies] = useState();

  useEffect(() => {
    getAllCompanies().then((company) => {
      setCompanies(company);
      console.log(company);
    });
  }, []);

  return (
    <>
      <AddStock dropdownOptions={companies} />
      <HomeButton />
    </>
  );
};

export default AddStockPage;
