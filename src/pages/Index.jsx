import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const mockVCs = [
  { id: 1, name: "Nordic VC", totalInvestment: 5000000, numberOfInvestments: 10 },
  { id: 2, name: "Scandinavian Ventures", totalInvestment: 3000000, numberOfInvestments: 7 },
  { id: 3, name: "Baltic Capital", totalInvestment: 2000000, numberOfInvestments: 5 },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">VC Investment Tracker</CardTitle>
          <p className="text-muted-foreground">Tracking VC investments in the Nordics</p>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>VC Name</TableHead>
                <TableHead>Total Investment Amount</TableHead>
                <TableHead>Number of Investments</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockVCs.map((vc) => (
                <TableRow key={vc.id}>
                  <TableCell>{vc.name}</TableCell>
                  <TableCell>{vc.totalInvestment.toLocaleString()}</TableCell>
                  <TableCell>{vc.numberOfInvestments}</TableCell>
                  <TableCell>
                    <Button onClick={() => navigate(`/vc-details/${vc.id}`)}>Details</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;