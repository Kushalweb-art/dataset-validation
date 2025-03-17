import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import Link from "next/link"

export function CompareHistory() {
  // In a real app, fetch comparison history
  const comparisons = [
    {
      id: "comp-001",
      source: "Customer Data (Jul 24, 2023)",
      target: "Customer Data (Jul 23, 2023)",
      date: "Jul 24, 2023 15:30",
      diffRows: 42,
      diffPk: 0,
      user: "John Doe",
    },
    {
      id: "comp-002",
      source: "Sales Transactions (Jul 23, 2023)",
      target: "Sales Transactions (Jul 22, 2023)",
      date: "Jul 23, 2023 11:45",
      diffRows: 156,
      diffPk: 156,
      user: "Jane Smith",
    },
    {
      id: "comp-003",
      source: "Product Inventory (Jul 22, 2023)",
      target: "Product Inventory (Jul 21, 2023)",
      date: "Jul 22, 2023 10:15",
      diffRows: 12,
      diffPk: 5,
      user: "John Doe",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Comparisons</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {comparisons.map((comparison) => (
            <div
              key={comparison.id}
              className="flex flex-col gap-2 rounded-lg border p-4 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <div className="font-medium">
                  {comparison.source} vs {comparison.target}
                </div>
                <div className="text-sm text-muted-foreground">
                  {comparison.date} by {comparison.user}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline">Diff Rows: {comparison.diffRows}</Badge>
                <Badge variant="outline">Diff PK: {comparison.diffPk}</Badge>
                <Button variant="ghost" size="icon" asChild>
                  <Link href={`/compare/${comparison.id}`}>
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">View Details</span>
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

