import axios from "./axios";

export const getAllCompanies = async () => {
  let data;
  await axios
    .get("/getall")
    .then((response) => {
      data = response.data;
    })
    .catch((err) => {
      console.log("Error: ", err);
    });

  return data;
};
