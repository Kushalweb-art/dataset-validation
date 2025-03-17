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

interface CompareSummaryProps {
  id: string
}

export function CompareSummary({ id }: CompareSummaryProps) {
  // In a real app, fetch comparison summary data based on ID
  const pieData = [
    { name: "Added", value: 14, color: "#10b981" },
    { name: "Modified", value: 14, color: "#f59e0b" },
    { name: "Deleted", value: 14, color: "#ef4444" },
  ]

  const columnData = [
    { name: "customer_id", added: 0, modified: 0, deleted: 0 },
    { name: "first_name", added: 0, modified: 0, deleted: 0 },
    { name: "last_name", added: 0, modified: 0, deleted: 0 },
    { name: "email", added: 0, modified: 12, deleted: 0 },
    { name: "phone", added: 0, modified: 8, deleted: 0 },
    { name: "address", added: 0, modified: 5, deleted: 0 },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Change Distribution</CardTitle>
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
          <CardTitle>Column Changes</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={columnData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" />
              <Tooltip />
              <Legend />
              <Bar dataKey="added" fill="#10b981" name="Added" />
              <Bar dataKey="modified" fill="#f59e0b" name="Modified" />
              <Bar dataKey="deleted" fill="#ef4444" name="Deleted" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

