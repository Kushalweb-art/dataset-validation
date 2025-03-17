import { Button } from "@/components/ui/button"
import { PlusCircle, Upload, Database } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function DatasetHeader() {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Datasets</h1>
        <p className="text-muted-foreground">Manage and validate your datasets</p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="gap-2">
            <PlusCircle className="h-4 w-4" />
            <span>Add Dataset</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Upload className="mr-2 h-4 w-4" />
            <span>Upload File (CSV, Excel)</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Database className="mr-2 h-4 w-4" />
            <span>Connect Database</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

