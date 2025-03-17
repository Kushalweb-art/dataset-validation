import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle, XCircle, Eye } from "lucide-react"
import Link from "next/link"

interface ValidationHistoryProps {
  id: string
}

export function ValidationHistory({ id }: ValidationHistoryProps) {
  // In a real app, fetch validation history based on dataset ID
  const validations = [
    {
      id: "val-001",
      runId: "RUN-12345",
      status: "passed",
      date: "Jul 24, 2023 14:32",
      duration: "45s",
      passedChecks: 24,
      failedChecks: 0,
      user: "John Doe",
    },
    {
      id: "val-002",
      runId: "RUN-12344",
      status: "failed",
      date: "Jul 23, 2023 10:15",
      duration: "52s",
      passedChecks: 20,
      failedChecks: 4,
      user: "Jane Smith",
    },
    {
      id: "val-003",
      runId: "RUN-12343",
      status: "passed",
      date: "Jul 22, 2023 09:45",
      duration: "48s",
      passedChecks: 24,
      failedChecks: 0,
      user: "John Doe",
    },
    {
      id: "val-004",
      runId: "RUN-12342",
      status: "passed",
      date: "Jul 21, 2023 16:20",
      duration: "47s",
      passedChecks: 24,
      failedChecks: 0,
      user: "System",
    },
    {
      id: "val-005",
      runId: "RUN-12341",
      status: "failed",
      date: "Jul 20, 2023 11:05",
      duration: "50s",
      passedChecks: 18,
      failedChecks: 6,
      user: "Jane Smith",
    },
  ]

  return (
    <Card>
      <div className="p-4">
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Run ID</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Checks</TableHead>
                <TableHead>User</TableHead>
                <TableHead className="w-[80px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {validations.map((validation) => (
                <TableRow key={validation.id}>
                  <TableCell className="font-medium">{validation.runId}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {validation.status === "passed" ? (
                        <>
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <Badge variant="outline">Passed</Badge>
                        </>
                      ) : (
                        <>
                          <XCircle className="h-4 w-4 text-red-500" />
                          <Badge variant="destructive">Failed</Badge>
                        </>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{validation.date}</TableCell>
                  <TableCell>{validation.duration}</TableCell>
                  <TableCell>
                    <span className="text-green-500">{validation.passedChecks} passed</span>
                    {validation.failedChecks > 0 && (
                      <span className="ml-2 text-red-500">{validation.failedChecks} failed</span>
                    )}
                  </TableCell>
                  <TableCell>{validation.user}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={`/validations/${validation.id}`}>
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">View Details</span>
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Card>
  )
}

