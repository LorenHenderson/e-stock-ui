import Dropdown from "../common/Dropdown";
import { useEffect, useState } from "react";
import {
  Button,
  FormLabel,
  Input,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { addStock } from "../api/stockApi";
import "../styles/AddStock.css";

const AddStock = ({ dropdownOptions }) => {
  const [companyName, setCompanyName] = useState("");
  const [responseCompanyCode, setResponseCompanyCode] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [stock, setStock] = useState({
    companyCode: "",
    stockPrice: "",
  });

  useEffect(() => {
    console.log("companySelection: ", stock.companyCode);
    let company = dropdownOptions?.find(
      (c) => c.companyCode === stock.companyCode
    )?.companyName;
    setCompanyName(company);
  }, [dropdownOptions, stock.companyCode]);

  const handledropdownSelection = (e) => {
    setStock({
      ...stock,
      companyCode: e.target.value,
    });
  };

  const handleInput = (e) => {
    setStock({
      ...stock,
      stockPrice: e.target.value,
    });
  };

  const submit = () => {
    addStock(stock).then((resp) => {
      setStock(resp.stock);
      setResponseCompanyCode(resp.companyCode);
      setTimestamp(resp.eventTimestamp);
    });
    setCompanyName("");
    setStock({ companyCode: "", stockPrice: "" });
  };

  return (
    <>
      <div className="addStock">
        <div className="addStockTitle">
          <h1>Add Company Stock</h1>
        </div>
        <form className="stockInputsDiv">
          <div className="addStockInput">
            <FormLabel>Company Code</FormLabel>
            <Dropdown
              className="stockSearchSelect"
              options={dropdownOptions}
              dropdownValue={stock.companyCode}
              onChange={handledropdownSelection}
            />
          </div>

          <div className="addStockInput">
            <FormLabel>Company Code</FormLabel>
            <Input readOnly={true} value={companyName} />
          </div>

          <div className="addStockInput">
            <FormLabel className="priceLabel">Stock price</FormLabel>
            <Input value={stock.stockPrice} onInput={handleInput} />
          </div>
        </form>
        <div className="addSubmitButton">
          <Button variant="contained" onClick={submit}>
            Submit
          </Button>
        </div>

        {!!responseCompanyCode && (
          <div>
            <hr className="hr" />
            <h2 className="addMessage">The following stock was added:</h2>
            <TableContainer>
              <Table aria-label="companies table">
                <TableHead>
                  <TableCell>Company Code</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Time</TableCell>
                </TableHead>
                <TableBody>
                  <TableRow key={responseCompanyCode.id}>
                    <TableCell>{responseCompanyCode}</TableCell>
                    <TableCell>{stock.stockPrice}</TableCell>
                    <TableCell>{timestamp}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        )}
      </div>
    </>
  );
};

export default AddStock;
