import { useEffect, useState } from "react";

const Dropdown = ({ className, options, dropdownValue, onChange }) => {
  const [defaultVal, setDefaultVal] = useState("");

  useEffect(() => {
    setDefaultVal(dropdownValue);
  }, []);

  return (
    <>
      <label>
        <select className={className} value={dropdownValue} onChange={onChange}>
          <option defaultValue={defaultVal}></option>
          {options &&
            options.map((c) => {
              return (
                <option
                  defaultValue={defaultVal}
                  key={c.id}
                  value={c.companyCode}
                >
                  {c.companyCode}
                </option>
              );
            })}
        </select>
      </label>
    </>
  );
};

export default Dropdown;
