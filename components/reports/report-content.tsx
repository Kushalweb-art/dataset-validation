"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"

interface ReportContentProps {
  id: string
}

export function ReportContent({ id }: ReportContentProps) {
  const [content, setContent] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // In a real app, this would be an API call to your backend
    const fetchReportContent = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))

        // This is where you would fetch from your actual API
        // const response = await fetch(`/api/reports/${id}/content`)
        // const data = await response.json()

        // For now, we'll use null to show loading states
        setContent(null)
        setLoading(false)
      } catch (err) {
        setError("Failed to load report content")
        setLoading(false)
      }
    }

    fetchReportContent()
  }, [id])

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-6 w-[200px]" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Skeleton className="h-[300px] w-full" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Skeleton className="h-[200px] w-full" />
              <Skeleton className="h-[200px] w-full" />
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Report Content</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border p-6 text-center">
          <p className="text-muted-foreground">Connect to your backend API to fetch and display report content.</p>
          <p className="mt-2 text-sm text-muted-foreground">
            This is where your report data will be displayed once you implement the backend.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

