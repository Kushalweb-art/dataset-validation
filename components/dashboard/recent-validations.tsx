"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"

export function RecentValidations() {
  const [validations, setValidations] = useState<any[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // In a real app, this would be an API call to your backend
    const fetchRecentValidations = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))

        // This is where you would fetch from your actual API
        // const response = await fetch('/api/validations/recent')
        // const data = await response.json()

        // For now, we'll use null to show loading states
        setValidations(null)
        setLoading(false)
      } catch (err) {
        setError("Failed to load recent validations")
        setLoading(false)
      }
    }

    fetchRecentValidations()
  }, [])

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Validations</CardTitle>
          <CardDescription>Latest validation runs across all datasets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex items-center gap-4">
                <Skeleton className="h-5 w-5 rounded-full" />
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-5 w-[200px]" />
                    <Skeleton className="h-5 w-[80px]" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-4 w-[100px]" />
                    <Skeleton className="h-4 w-[80px]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Validations</CardTitle>
          <CardDescription>Latest validation runs across all datasets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center text-destructive">
            <p>{error}</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!validations || validations.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Validations</CardTitle>
          <CardDescription>Latest validation runs across all datasets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center p-6 text-center">
            <p className="text-muted-foreground">
              No recent validations found.
              <br />
              Run your first validation to see results here.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Validations</CardTitle>
        <CardDescription>Latest validation runs across all datasets</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {validations.map((validation) => (
            <div key={validation.id} className="flex items-center gap-4">
              {validation.status === "passed" ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : (
                <XCircle className="h-5 w-5 text-red-500" />
              )}
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <Link href={`/validations/${validation.id}`} className="font-medium hover:underline">
                    {validation.dataset}
                  </Link>
                  <Badge variant={validation.status === "passed" ? "outline" : "destructive"}>
                    {validation.status === "passed" ? "Passed" : "Failed"}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{validation.date}</span>
                  <span>{validation.checks} checks</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

