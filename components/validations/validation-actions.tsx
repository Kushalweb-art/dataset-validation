import { Button } from "@/components/ui/button"
import { Play, Download, Share } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface ValidationActionsProps {
  id: string
}

export function ValidationActions({ id }: ValidationActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <Button className="gap-2">
        <Play className="h-4 w-4" />
        <span>Rerun Validation</span>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Actions</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Download className="mr-2 h-4 w-4" />
            <span>Export Results</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Share className="mr-2 h-4 w-4" />
            <span>Share Report</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

