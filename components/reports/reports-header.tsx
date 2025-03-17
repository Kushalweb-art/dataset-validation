import { Button } from "@/components/ui/button"
import { BarChart3 } from "lucide-react"

export function ReportsHeader() {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <p className="text-muted-foreground">Generate and view reports on data quality and validation</p>
      </div>
      <Button className="gap-2">
        <BarChart3 className="h-4 w-4" />
        <span>Generate Report</span>
      </Button>
    </div>
  )
}

