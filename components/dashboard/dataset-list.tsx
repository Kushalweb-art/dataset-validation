"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Database, ExternalLink, MoreHorizontal } from "lucide-react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function DatasetList() {
  const [datasets, setDatasets] = useState<any[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // In a real app, this would be an API call to your backend
    const fetchDatasets = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1200))

        // This is where you would fetch from your actual API
        // const response = await fetch('/api/datasets/recent')
        // const data = await response.json()

        // For now, we'll use null to show loading states
        setDatasets(null)
        setLoading(false)
      } catch (err) {
        setError("Failed to load datasets")
        setLoading(false)
      }
    }

    fetchDatasets()
  }, [])

  if (loading) {
    return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Recent Datasets</CardTitle>
            <CardDescription>Your most recently added or updated datasets</CardDescription>
          </div>
          <Button variant="outline" disabled>
            View All
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <div>
                      <Skeleton className="h-5 w-[150px]" />
                      <Skeleton className="mt-1 h-4 w-[100px]" />
                    </div>
                  </div>
                  <Skeleton className="h-8 w-8 rounded-full" />
                </div>
                <div className="grid grid-cols-3 border-t px-4 py-3">
                  <div className="flex flex-col">
                    <Skeleton className="h-4 w-[60px]" />
                    <Skeleton className="mt-1 h-5 w-[40px]" />
                  </div>
                  <div className="flex flex-col">
                    <Skeleton className="h-4 w-[40px]" />
                    <Skeleton className="mt-1 h-5 w-[60px]" />
                  </div>
                  <div className="flex flex-col">
                    <Skeleton className="h-4 w-[60px]" />
                    <Skeleton className="mt-1 h-5 w-[30px]" />
                  </div>
                </div>
              </Card>
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
          <CardTitle>Recent Datasets</CardTitle>
          <CardDescription>Your most recently added or updated datasets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center text-destructive">
            <p>{error}</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!datasets || datasets.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Datasets</CardTitle>
          <CardDescription>Your most recently added or updated datasets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center p-6 text-center">
            <Database className="mb-4 h-12 w-12 text-muted-foreground" />
            <h3 className="mb-2 text-xl font-semibold">No datasets found</h3>
            <p className="mb-6 text-muted-foreground">
              You haven't added any datasets yet. Add your first dataset to get started.
            </p>
            <Button className="gap-2">
              <Database className="h-4 w-4" />
              <span>Add Dataset</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Datasets</CardTitle>
          <CardDescription>Your most recently added or updated datasets</CardDescription>
        </div>
        <Button variant="outline" asChild>
          <Link href="/datasets">
            View All
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {datasets.map((dataset) => (
            <Card key={dataset.id} className="overflow-hidden">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <Database className="h-8 w-8 text-primary" />
                  <div>
                    <Link href={`/datasets/${dataset.id}`} className="font-medium hover:underline">
                      {dataset.name}
                    </Link>
                    <div className="text-sm text-muted-foreground">{dataset.source}</div>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Run Validation</DropdownMenuItem>
                    <DropdownMenuItem>Edit Dataset</DropdownMenuItem>
                    <DropdownMenuItem>Delete Dataset</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="grid grid-cols-3 border-t px-4 py-3">
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">Status</span>
                  <Badge variant={dataset.status === "healthy" ? "outline" : "destructive"} className="mt-1 w-fit">
                    {dataset.status === "healthy" ? "Healthy" : "Issues"}
                  </Badge>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">Rows</span>
                  <span className="font-medium">{dataset.rows?.toLocaleString() || "-"}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">Columns</span>
                  <span className="font-medium">{dataset.columns || "-"}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

