import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface DatasetMetadataProps {
  id: string
}

export function DatasetMetadata({ id }: DatasetMetadataProps) {
  // In a real app, fetch metadata based on dataset ID
  const metadata = {
    general: {
      "Dataset Name": "Customer Data",
      "Source Type": "PostgreSQL",
      "Created At": "June 15, 2023",
      "Last Updated": "July 22, 2023",
      "Total Rows": "15,243",
      "Total Columns": "24",
      "File Size": "4.2 MB",
      Owner: "John Doe",
    },
    schema: [
      { name: "customer_id", type: "string", nullable: false, description: "Unique identifier for customers" },
      { name: "first_name", type: "string", nullable: false, description: "Customer's first name" },
      { name: "last_name", type: "string", nullable: false, description: "Customer's last name" },
      { name: "email", type: "string", nullable: false, description: "Customer's email address" },
      { name: "phone", type: "string", nullable: true, description: "Customer's phone number" },
      { name: "address", type: "string", nullable: true, description: "Customer's street address" },
      { name: "city", type: "string", nullable: true, description: "Customer's city" },
      { name: "state", type: "string", nullable: true, description: "Customer's state/province" },
      { name: "zip_code", type: "string", nullable: true, description: "Customer's postal code" },
      { name: "country", type: "string", nullable: true, description: "Customer's country" },
    ],
  }

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>General Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {Object.entries(metadata.general).map(([key, value]) => (
              <div key={key} className="flex justify-between border-b pb-2">
                <span className="font-medium">{key}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Schema Information</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Column Name</TableHead>
                <TableHead>Data Type</TableHead>
                <TableHead>Nullable</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {metadata.schema.map((column) => (
                <TableRow key={column.name}>
                  <TableCell className="font-medium">{column.name}</TableCell>
                  <TableCell>{column.type}</TableCell>
                  <TableCell>{column.nullable ? "Yes" : "No"}</TableCell>
                  <TableCell>{column.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

