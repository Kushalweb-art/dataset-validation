import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle } from "lucide-react"

interface ValidationDetailsProps {
  id: string
}

export function ValidationDetails({ id }: ValidationDetailsProps) {
  // In a real app, fetch validation details based on ID
  const validation = {
    id,
    runId: "RUN-12345",
    dataset: "Customer Data",
    status: "passed",
    date: "Jul 24, 2023 14:32",
    duration: "45s",
    passedChecks: 24,
    failedChecks: 0,
    user: "John Doe",
  }

  return (
    <div>
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold tracking-tight">Validation Run: {validation.runId}</h1>
        {validation.status === "passed" ? (
          <Badge variant="outline" className="ml-2">
            <CheckCircle className="mr-1 h-3 w-3 text-green-500" />
            Passed
          </Badge>
        ) : (
          <Badge variant="destructive" className="ml-2">
            <XCircle className="mr-1 h-3 w-3" />
            Failed
          </Badge>
        )}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">
        Dataset: {validation.dataset} • Run on {validation.date} • Duration: {validation.duration} • By{" "}
        {validation.user}
      </div>
    </div>
  )
}

