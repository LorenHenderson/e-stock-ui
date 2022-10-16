import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../styles/HomeButton.css";

const HomeButton = () => {
  const navigate = useNavigate();
  return (
    <div className="homeButton">
      <Button variant="contained" onClick={() => navigate("/")}>
        Home
      </Button>
    </div>
  );
};
export default HomeButton;
