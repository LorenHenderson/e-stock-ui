import { useEffect, useState } from "react";
import { getAllCompanies } from "../../api/companyApi";
import DeleteCompany from "../../components/DeleteCompany";

const DeleteCompanyPage = () => {
  const [companies, setCompanies] = useState("");
  const [reload, setReload] = useState("");

  useEffect(() => {
    getAllCompanies().then((companies) => {
      setCompanies(companies);
    });
  }, [reload]);

  return (
    <>
      <DeleteCompany
        companies={companies}
        reload={() => {
          setReload();
        }}
      />
    </>
  );
};

export default DeleteCompanyPage;
