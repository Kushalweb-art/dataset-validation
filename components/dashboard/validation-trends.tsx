"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"

export function ValidationTrends() {
  const [data, setData] = useState<any[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [timeframe, setTimeframe] = useState("monthly")

  useEffect(() => {
    // In a real app, this would be an API call to your backend
    const fetchTrends = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1200))

        // This is where you would fetch from your actual API
        // const response = await fetch(`/api/dashboard/trends?timeframe=${timeframe}`)
        // const data = await response.json()

        // For now, we'll use null to show loading states
        setData(null)
        setLoading(false)
      } catch (err) {
        setError("Failed to load validation trends")
        setLoading(false)
      }
    }

    setLoading(true)
    fetchTrends()
  }, [timeframe])

  const handleTimeframeChange = (value: string) => {
    setTimeframe(value)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Validation Trends</CardTitle>
        <CardDescription>Validation results over time</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="monthly" onValueChange={handleTimeframeChange}>
          <TabsList className="mb-4">
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
          {loading ? (
            <div className="h-[300px]">
              <Skeleton className="h-full w-full" />
            </div>
          ) : error ? (
            <div className="flex h-[300px] items-center justify-center">
              <p className="text-destructive">{error}</p>
            </div>
          ) : !data ? (
            <div className="flex h-[300px] items-center justify-center">
              <p className="text-center text-muted-foreground">
                Connect to your backend API to display validation trends.
                <br />
                This chart will show passed and failed validations over time.
              </p>
            </div>
          ) : (
            <TabsContent value={timeframe} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="passed" stackId="1" stroke="#10b981" fill="#10b981" />
                  <Area type="monotone" dataKey="failed" stackId="1" stroke="#ef4444" fill="#ef4444" />
                </AreaChart>
              </ResponsiveContainer>
            </TabsContent>
          )}
        </Tabs>
      </CardContent>
    </Card>
  )
}

