"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface CompareResultsProps {
  id: string
}

export function CompareResults({ id }: CompareResultsProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const rowsPerPage = 10

  // Mock data - in a real app, fetch this based on comparison ID
  const columns = [
    "customer_id",
    "first_name",
    "last_name",
    "email",
    "phone",
    "address",
    "city",
    "state",
    "zip_code",
    "country",
  ]

  const differences = Array.from({ length: 42 }, (_, i) => ({
    customer_id: `CUST-${1000 + i}`,
    first_name: ["John", "Jane", "Michael", "Sarah", "David"][i % 5],
    last_name: ["Smith", "Johnson", "Williams", "Brown", "Jones"][i % 5],
    email: `example${i}@example.com`,
    phone: `(555) 123-${4000 + i}`,
    address: `${1000 + i} Main St`,
    city: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"][i % 5],
    state: ["NY", "CA", "IL", "TX", "AZ"][i % 5],
    zip_code: `${10000 + i}`,
    country: "USA",
    change_type: i % 3 === 0 ? "added" : i % 3 === 1 ? "modified" : "deleted",
    modified_fields: i % 3 === 1 ? ["email", "phone"] : [],
  }))

  const totalPages = Math.ceil(differences.length / rowsPerPage)
  const currentRows = differences.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Row Differences</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing {(currentPage - 1) * rowsPerPage + 1} to {Math.min(currentPage * rowsPerPage, differences.length)}{" "}
            of {differences.length} differences
          </div>
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search differences..." className="pl-8" />
          </div>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Change</TableHead>
                {columns.map((column) => (
                  <TableHead key={column}>{column}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentRows.map((row, i) => (
                <TableRow
                  key={i}
                  className={
                    row.change_type === "added"
                      ? "bg-green-50 dark:bg-green-900/20"
                      : row.change_type === "deleted"
                        ? "bg-red-50 dark:bg-red-900/20"
                        : "bg-yellow-50 dark:bg-yellow-900/20"
                  }
                >
                  <TableCell>
                    <Badge
                      variant={
                        row.change_type === "added"
                          ? "outline"
                          : row.change_type === "deleted"
                            ? "destructive"
                            : "secondary"
                      }
                    >
                      {row.change_type.charAt(0).toUpperCase() + row.change_type.slice(1)}
                    </Badge>
                  </TableCell>
                  {columns.map((column) => (
                    <TableCell
                      key={column}
                      className={
                        row.change_type === "modified" && row.modified_fields.includes(column) ? "font-bold" : ""
                      }
                    >
                      {row[column as keyof typeof row]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          <div className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

