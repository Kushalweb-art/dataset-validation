import { Button } from "@/components/ui/button"
import { FileDown, Share } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface ReportActionsProps {
  id: string
}

export function ReportActions({ id }: ReportActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <Button className="gap-2">
        <FileDown className="h-4 w-4" />
        <span>Download Report</span>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Actions</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Share className="mr-2 h-4 w-4" />
            <span>Share Report</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Regenerate Report</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

