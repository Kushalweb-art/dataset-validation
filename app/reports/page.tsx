import { ReportsHeader } from "@/components/reports/reports-header"
import { ReportsList } from "@/components/reports/reports-list"
import { ReportsFilters } from "@/components/reports/reports-filters"

export default function ReportsPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <ReportsHeader />
      <ReportsFilters />
      <ReportsList />
    </div>
  )
}

