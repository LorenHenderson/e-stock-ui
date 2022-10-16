import { stockAxios } from "./axios";

export const addStock = async (stock) => {
  let data;
  await stockAxios
    .post("/add", stock)
    .then((response) => {
      data = response.data;
      console.log("Stock response: ", response.data);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });

  return data;
};
