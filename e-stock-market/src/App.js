import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompaniesPage from "./pages/getCompanies/GetAllCompaniesPage";
import RegisterPage from "./pages/addCompany/RegisterCompanyPage";
import SearchCompanyPage from "./pages/searchCompany/SearchCompanyPage";
import AddStockPage from "./pages/addStock/AddStockPage";
import DeleteCompanyPage from "./pages/deleteCompany/DeleteCompanyPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company/getall" element={<CompaniesPage />} />
        <Route path="/company/register" element={<RegisterPage />} />
        <Route path="/company/searchCompany" element={<SearchCompanyPage />} />
        <Route path="/stock/addStock" element={<AddStockPage />} />
        <Route path="/company/delete" element={<DeleteCompanyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
