"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"

interface DatasetPreviewProps {
  id: string
}

export function DatasetPreview({ id }: DatasetPreviewProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const rowsPerPage = 10

  // Mock data - in a real app, fetch this based on dataset ID
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

  const rows = Array.from({ length: 100 }, (_, i) => ({
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
  }))

  const totalPages = Math.ceil(rows.length / rowsPerPage)
  const currentRows = rows.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)

  return (
    <Card>
      <div className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing {(currentPage - 1) * rowsPerPage + 1} to {Math.min(currentPage * rowsPerPage, rows.length)} of{" "}
            {rows.length} rows
          </div>
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search data..." className="pl-8" />
          </div>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((column) => (
                  <TableHead key={column}>{column}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentRows.map((row, i) => (
                <TableRow key={i}>
                  {columns.map((column) => (
                    <TableCell key={column}>{row[column as keyof typeof row]}</TableCell>
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
      </div>
    </Card>
  )
}

