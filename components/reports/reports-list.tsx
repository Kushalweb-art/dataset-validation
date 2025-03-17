"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { BarChart3, FileDown, Eye } from "lucide-react"
import Link from "next/link"

export function ReportsList() {
  const [reports, setReports] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // In a real app, this would be an API call to your backend
    const fetchReports = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))

        // This is where you would fetch from your actual API
        // const response = await fetch('/api/reports')
        // const data = await response.json()

        // For now, we'll use empty data to show loading states
        setReports([])
        setLoading(false)
      } catch (err) {
        setError("Failed to load reports. Please try again.")
        setLoading(false)
      }
    }

    fetchReports()
  }, [])

  if (error) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center p-6">
          <div className="text-center text-destructive">
            <p>{error}</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setLoading(true)
                setError(null)
                // Retry fetching
                setTimeout(() => setLoading(false), 1500)
              }}
            >
              Retry
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 rounded-lg border p-4 md:flex-row md:items-center md:justify-between"
              >
                <div className="space-y-2">
                  <Skeleton className="h-5 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Skeleton className="h-8 w-[100px]" />
                  <Skeleton className="h-8 w-[100px]" />
                  <Skeleton className="h-8 w-8 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  if (reports.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center p-12">
          <BarChart3 className="mb-4 h-12 w-12 text-muted-foreground" />
          <h3 className="mb-2 text-xl font-semibold">No reports found</h3>
          <p className="mb-6 text-center text-muted-foreground">
            You haven't generated any reports yet. Create your first report to get started.
          </p>
          <Button className="gap-2">
            <BarChart3 className="h-4 w-4" />
            <span>Generate Report</span>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Reports</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reports.map((report) => (
            <div
              key={report.id}
              className="flex flex-col gap-2 rounded-lg border p-4 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <div className="font-medium">{report.title}</div>
                <div className="text-sm text-muted-foreground">
                  {report.date} • {report.type} • {report.user}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline">{report.type}</Badge>
                <Button variant="outline" size="sm" className="gap-1">
                  <FileDown className="h-4 w-4" />
                  <span>Download</span>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href={`/reports/${report.id}`}>
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">View Report</span>
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

