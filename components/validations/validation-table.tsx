"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle, XCircle, Eye } from "lucide-react"

export function ValidationTable() {
  const [validations, setValidations] = useState<any[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // In a real app, this would be an API call to your backend
    const fetchValidations = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))

        // This is where you would fetch from your actual API
        // const response = await fetch('/api/validations')
        // const data = await response.json()

        // For now, we'll use null to show loading states
        setValidations(null)
        setLoading(false)
      } catch (err) {
        setError("Failed to load validations")
        setLoading(false)
      }
    }

    fetchValidations()
  }, [])

  if (loading) {
    return (
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Run ID</TableHead>
              <TableHead>Dataset</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Checks</TableHead>
              <TableHead>User</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 5 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Skeleton className="h-5 w-[100px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-[150px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-[80px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-[120px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-[60px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-[100px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-5 w-[100px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-8 w-8 rounded-full" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-md border p-6">
        <div className="text-center text-destructive">
          <p>{error}</p>
        </div>
      </div>
    )
  }

  if (!validations || validations.length === 0) {
    return (
      <div className="rounded-md border p-8">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="mb-4 text-muted-foreground">
            No validations found. Run your first validation to see results here.
          </p>
          <Button className="gap-2">
            <Eye className="h-4 w-4" />
            <span>Run Validation</span>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Run ID</TableHead>
            <TableHead>Dataset</TableHead>
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
              <TableCell>{validation.dataset}</TableCell>
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
  )
}

