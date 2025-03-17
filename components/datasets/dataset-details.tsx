import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle } from "lucide-react"

interface DatasetDetailsProps {
  id: string
}

export function DatasetDetails({ id }: DatasetDetailsProps) {
  // In a real app, fetch dataset details based on ID
  const dataset = {
    id,
    name: "Customer Data",
    source: "PostgreSQL",
    lastValidation: "2 hours ago",
    status: "healthy",
    rows: 15243,
    columns: 24,
    createdAt: "2023-06-15",
    updatedAt: "2023-07-22",
  }

  return (
    <div>
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold tracking-tight">{dataset.name}</h1>
        {dataset.status === "healthy" ? (
          <Badge variant="outline" className="ml-2">
            <CheckCircle className="mr-1 h-3 w-3 text-green-500" />
            Healthy
          </Badge>
        ) : (
          <Badge variant="destructive" className="ml-2">
            <XCircle className="mr-1 h-3 w-3" />
            Issues
          </Badge>
        )}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">
        {dataset.source} • {dataset.rows.toLocaleString()} rows • {dataset.columns} columns
      </div>
    </div>
  )
}

