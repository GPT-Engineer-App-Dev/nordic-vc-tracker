import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const mockVCs = [
  { id: 1, name: "Nordic VC", totalInvestment: 5000000, numberOfInvestments: 10, investments: [
    { companyName: "Company A", amount: 1000000, date: "2023-01-01", sector: "Tech" },
    { companyName: "Company B", amount: 500000, date: "2023-02-01", sector: "Health" },
  ]},
  { id: 2, name: "Scandinavian Ventures", totalInvestment: 3000000, numberOfInvestments: 7, investments: [
    { companyName: "Company C", amount: 700000, date: "2023-03-01", sector: "Finance" },
    { companyName: "Company D", amount: 300000, date: "2023-04-01", sector: "Retail" },
  ]},
  { id: 3, name: "Baltic Capital", totalInvestment: 2000000, numberOfInvestments: 5, investments: [
    { companyName: "Company E", amount: 400000, date: "2023-05-01", sector: "Energy" },
    { companyName: "Company F", amount: 600000, date: "2023-06-01", sector: "Tech" },
  ]},
];

const VCDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const vc = mockVCs.find(vc => vc.id === parseInt(id));

  if (!vc) {
    return <div>VC not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">VC Details</CardTitle>
        </CardHeader>
        <CardContent>
          <p><strong>VC Name:</strong> {vc.name}</p>
          <p><strong>Total Investment Amount:</strong> {vc.totalInvestment.toLocaleString()}</p>
          <p><strong>Number of Investments:</strong> {vc.numberOfInvestments}</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company Name</TableHead>
                <TableHead>Investment Amount</TableHead>
                <TableHead>Date of Investment</TableHead>
                <TableHead>Sector</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vc.investments.map((investment, index) => (
                <TableRow key={index}>
                  <TableCell>{investment.companyName}</TableCell>
                  <TableCell>{investment.amount.toLocaleString()}</TableCell>
                  <TableCell>{investment.date}</TableCell>
                  <TableCell>{investment.sector}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button onClick={() => navigate(-1)} className="mt-4">Back</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default VCDetails;