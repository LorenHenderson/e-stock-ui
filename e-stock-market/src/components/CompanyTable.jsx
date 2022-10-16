import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const CompanyTable = ({ companies, company }) => {
  return (
    <>
      {companies
        ? companies && (
            <TableContainer>
              <Table aria-label="companies table">
                <TableHead>
                  <TableCell>Company Code</TableCell>
                  <TableCell>Company Name</TableCell>
                  <TableCell>Company CEO</TableCell>
                  <TableCell>Company Turnover</TableCell>
                  <TableCell>Company Website</TableCell>
                  <TableCell>Stock Exchange</TableCell>
                  <TableCell>Stocks</TableCell>
                </TableHead>
                <TableBody>
                  {companies.map((company, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>{company.companyCode}</TableCell>
                        <TableCell>{company.companyName}</TableCell>
                        <TableCell>{company.companyCEO}</TableCell>
                        <TableCell>{company.companyTurnover}</TableCell>
                        <TableCell>{company.companyWebsite}</TableCell>
                        <TableCell>{company.stockExchange}</TableCell>
                        <TableCell>
                          <div className="stockContainer">
                            <Table
                              aria-label="stocks table"
                              stickyHeader={true}
                              className="stocksContainer"
                            >
                              <TableHead className="stockTable">
                                <TableCell>Price</TableCell>
                                <TableCell>Time</TableCell>
                              </TableHead>
                              {company.stocks &&
                                company.stocks.map((stock, index) => {
                                  return (
                                    <TableBody key={index}>
                                      <TableRow key={index}>
                                        <TableCell>
                                          {stock.stockPrice}
                                        </TableCell>
                                        <TableCell>{stock.timestamp}</TableCell>
                                      </TableRow>
                                    </TableBody>
                                  );
                                })}
                            </Table>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          )
        : company && (
            <TableContainer>
              <Table aria-label="companies table">
                <TableHead>
                  <TableCell>Company Code</TableCell>
                  <TableCell>Company Name</TableCell>
                  <TableCell>Company CEO</TableCell>
                  <TableCell>Company Turnover</TableCell>
                  <TableCell>Company Website</TableCell>
                  <TableCell>Stock Exchange</TableCell>
                  <TableCell>Stocks</TableCell>
                </TableHead>
                <TableBody>
                  <TableRow key={company.id}>
                    <TableCell>{company.companyCode}</TableCell>
                    <TableCell>{company.companyName}</TableCell>
                    <TableCell>{company.companyCEO}</TableCell>
                    <TableCell>{company.companyTurnover}</TableCell>
                    <TableCell>{company.companyWebsite}</TableCell>
                    <TableCell>{company.stockExchange}</TableCell>
                    <TableCell>
                      <div className="stockContainer">
                        <Table
                          aria-label="stocks table"
                          stickyHeader={true}
                          className="stocksContainer"
                        >
                          <TableContainer>
                            <TableHead className="stockTable">
                              <TableCell>Price</TableCell>
                              <TableCell>Time</TableCell>
                            </TableHead>
                            {company.stocks &&
                              company.stocks.map((stock, index) => {
                                return (
                                  <TableBody key={index}>
                                    <TableRow key={index}>
                                      <TableCell>{stock.stockPrice}</TableCell>
                                      <TableCell>{stock.timestamp}</TableCell>
                                    </TableRow>
                                  </TableBody>
                                );
                              })}
                          </TableContainer>
                        </Table>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          )}
    </>
  );
};

export default CompanyTable;
