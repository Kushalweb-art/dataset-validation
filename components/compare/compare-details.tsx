import { Badge } from "@/components/ui/badge"

interface CompareDetailsProps {
  id: string
}

export function CompareDetails({ id }: CompareDetailsProps) {
  // In a real app, fetch comparison details based on ID
  const comparison = {
    id,
    source: "Customer Data (Jul 24, 2023)",
    target: "Customer Data (Jul 23, 2023)",
    date: "Jul 24, 2023 15:30",
    diffRows: 42,
    diffPk: 0,
    user: "John Doe",
  }

  return (
    <div>
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold tracking-tight">Dataset Comparison</h1>
      </div>
      <div className="mt-1 text-sm text-muted-foreground">
        {comparison.source} vs {comparison.target} • {comparison.date} • By {comparison.user}
      </div>
      <div className="mt-2 flex gap-2">
        <Badge variant="outline">Diff Rows: {comparison.diffRows}</Badge>
        <Badge variant="outline">Diff PK: {comparison.diffPk}</Badge>
      </div>
    </div>
  )
}

