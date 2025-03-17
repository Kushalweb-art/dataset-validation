"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"

interface ValidationSummaryProps {
  id: string
}

export function ValidationSummary({ id }: ValidationSummaryProps) {
  // In a real app, fetch validation summary data based on ID
  const pieData = [
    { name: "Passed", value: 24, color: "#10b981" },
    { name: "Warnings", value: 1, color: "#f59e0b" },
    { name: "Failed", value: 0, color: "#ef4444" },
  ]

  const barData = [
    { name: "Row Count", value: 15243 },
    { name: "Missing Values", value: 124 },
    { name: "Duplicate Values", value: 0 },
    { name: "Invalid Values", value: 87 },
  ]

  const columnData = [
    { name: "customer_id", valid: 100, invalid: 0, missing: 0 },
    { name: "first_name", valid: 100, invalid: 0, missing: 0 },
    { name: "last_name", valid: 100, invalid: 0, missing: 0 },
    { name: "email", valid: 99.3, invalid: 0.5, missing: 0.2 },
    { name: "phone", valid: 92.2, invalid: 1.8, missing: 6 },
    { name: "address", valid: 94, invalid: 0, missing: 6 },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Check Results</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Data Overview</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Column Quality</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={columnData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis type="category" dataKey="name" />
              <Tooltip />
              <Legend />
              <Bar dataKey="valid" stackId="a" fill="#10b981" name="Valid" />
              <Bar dataKey="invalid" stackId="a" fill="#ef4444" name="Invalid" />
              <Bar dataKey="missing" stackId="a" fill="#f59e0b" name="Missing" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

