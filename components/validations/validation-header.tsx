import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function ValidationHeader() {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Validations</h1>
        <p className="text-muted-foreground">View and manage all validation runs</p>
      </div>
      <Button className="gap-2">
        <Play className="h-4 w-4" />
        <span>New Validation</span>
      </Button>
    </div>
  )
}

