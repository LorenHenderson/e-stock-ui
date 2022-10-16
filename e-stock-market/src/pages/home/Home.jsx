import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="welcome">
        <h1>Welcome to the E-Stock-Market</h1>
      </div>
      <div className="companiesTitle">
        <h2>Select Company Action:</h2>
      </div>
      <div className="companyButtonsDiv">
        <Button
          variant="contained"
          onClick={() => {
            navigate("/company/register");
          }}
        >
          Add Company
        </Button>
        <Button variant="contained" onClick={() => navigate("/company/getall")}>
          List All Companies
        </Button>
        <Button
          variant="contained"
          onClick={() => navigate("/company/searchCompany")}
        >
          Search Companies
        </Button>
        <Button variant="contained" onClick={() => navigate("/company/delete")}>
          Delete a Company
        </Button>
      </div>
      <hr className="homeHr"></hr>
      <div className="stocksTitle">
        <h2>Select Stock Action</h2>
      </div>
      <div className="stocksButtonsDiv">
        <Button
          variant="contained"
          onClick={() => {
            navigate("/stock/addStock");
          }}
        >
          Add Stock
        </Button>
      </div>
    </>
  );
};

export default Home;
