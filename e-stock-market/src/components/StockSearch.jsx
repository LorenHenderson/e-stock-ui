import Dropdown from "../common/Dropdown";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";

const StockSearch = ({ dropdownOptions }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [companySelection, setCompanySelection] = useState();
  const [companyName, setCompanyName] = useState();

  useEffect(() => {
    console.log("companySelection: ", companySelection);
    setCompanyName(
      dropdownOptions?.find((c) => c.companyCode === companySelection)
        ?.companyName
    );
  }, [dropdownOptions, companySelection]);

  const handledropdownSelection = (e) => {
    setCompanySelection(e.target.value);
    console.log("S val: ", e.target.value);
  };
  console.log("companyName: ", companyName);
  return (
    <>
      <div>
        <label>Company Code</label>

        <Dropdown
          className="companySearchSelect"
          options={dropdownOptions}
          dropdownValue={companySelection}
          onChange={handledropdownSelection}
        />
      </div>
      <div>
        <div>
          <label>Company Code</label>
          <input readOnly={true} value={companyName}></input>
        </div>
        {/* )} */}
      </div>
      <div>
        {/* <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        /> */}
      </div>
    </>
  );
};

export default StockSearch;
