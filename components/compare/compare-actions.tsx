import { Button } from "@/components/ui/button"
import { Download, Share } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface CompareActionsProps {
  id: string
}

export function CompareActions({ id }: CompareActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <Button className="gap-2">
        <Download className="h-4 w-4" />
        <span>Export Results</span>
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
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

