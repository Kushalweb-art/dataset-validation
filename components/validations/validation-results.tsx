import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react"

interface ValidationResultsProps {
  id: string
}

export function ValidationResults({ id }: ValidationResultsProps) {
  // In a real app, fetch validation results based on ID
  const results = [
    {
      id: "check-001",
      name: "Row count check",
      description: "Ensure dataset has rows",
      test: "row_count > 0",
      status: "passed",
      value: "15,243",
      expected: "> 0",
    },
    {
      id: "check-002",
      name: "Duplicate customer ID check",
      description: "Ensure no duplicate customer IDs",
      test: "duplicate_count(customer_id) = 0",
      status: "passed",
      value: "0",
      expected: "= 0",
    },
    {
      id: "check-003",
      name: "Email missing check",
      description: "Ensure email field has minimal missing values",
      test: "missing_percentage(email) < 1",
      status: "passed",
      value: "0.2%",
      expected: "< 1%",
    },
    {
      id: "check-004",
      name: "First name missing check",
      description: "Ensure first_name field has no missing values",
      test: "missing_percentage(first_name) = 0",
      status: "passed",
      value: "0%",
      expected: "= 0%",
    },
    {
      id: "check-005",
      name: "Last name missing check",
      description: "Ensure last_name field has no missing values",
      test: "missing_percentage(last_name) = 0",
      status: "passed",
      value: "0%",
      expected: "= 0%",
    },
    {
      id: "check-006",
      name: "Email format check",
      description: "Ensure email addresses are valid",
      test: "invalid_percentage(email) < 5",
      status: "passed",
      value: "0.5%",
      expected: "< 5%",
    },
    {
      id: "check-007",
      name: "Phone number format check",
      description: "Ensure phone numbers are valid",
      test: "invalid_percentage(phone) < 2",
      status: "warning",
      value: "1.8%",
      expected: "< 2%",
    },
  ]

  const passedCount = results.filter((r) => r.status === "passed").length
  const failedCount = results.filter((r) => r.status === "failed").length
  const warningCount = results.filter((r) => r.status === "warning").length

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Passed Checks</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{passedCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Failed Checks</CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{failedCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Warnings</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{warningCount}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Check Results</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Check</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Test</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Expected</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.map((result) => (
                <TableRow key={result.id}>
                  <TableCell className="font-medium">{result.name}</TableCell>
                  <TableCell>{result.description}</TableCell>
                  <TableCell>
                    <code>{result.test}</code>
                  </TableCell>
                  <TableCell>
                    {result.status === "passed" && (
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                      >
                        <CheckCircle className="mr-1 h-3 w-3" />
                        Passed
                      </Badge>
                    )}
                    {result.status === "failed" && (
                      <Badge variant="destructive">
                        <XCircle className="mr-1 h-3 w-3" />
                        Failed
                      </Badge>
                    )}
                    {result.status === "warning" && (
                      <Badge
                        variant="outline"
                        className="bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400"
                      >
                        <AlertTriangle className="mr-1 h-3 w-3" />
                        Warning
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>{result.value}</TableCell>
                  <TableCell>{result.expected}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

