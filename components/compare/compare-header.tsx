import { Button } from "@/components/ui/button"
import { GitCompare } from "lucide-react"

export function CompareHeader() {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Compare Datasets</h1>
        <p className="text-muted-foreground">Compare datasets to identify differences and changes</p>
      </div>
      <Button className="gap-2">
        <GitCompare className="h-4 w-4" />
        <span>New Comparison</span>
      </Button>
    </div>
  )
}

