import { companyAxios } from "./axios";

export const getAllCompanies = async () => {
  let data;
  await companyAxios
    .get("/getall")
    .then((response) => {
      data = response.data;
    })
    .catch((err) => {
      console.log("Error: ", err);
    });

  return data;
};

export const registerCompany = async (company) => {
  let data;
  await companyAxios
    .post("/register", company)
    .then((response) => {
      data = response.data;
    })
    .catch((err) => {
      console.log("Error: ", err);
    });

  return data;
};

export const getCompanyByCompanyCode = async (companyCode) => {
  let data;
  await companyAxios
    .get(`/info/` + companyCode)
    .then((response) => {
      data = response.data;
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
  return data;
};

export const deleteCompanyByCompanyCode = async (companyCode) => {
  let data;
  await companyAxios
    .delete(`/delete/` + companyCode)
    .then((response) => {
      data = response;
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
  return data;
};
