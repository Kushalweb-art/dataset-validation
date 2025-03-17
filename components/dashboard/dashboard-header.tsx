import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export function DashboardHeader() {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your datasets and validation status</p>
      </div>
      <Button className="gap-2">
        <PlusCircle className="h-4 w-4" />
        <span>New Dataset</span>
      </Button>
    </div>
  )
}

