import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { RecentValidations } from "@/components/dashboard/recent-validations"
import { ValidationTrends } from "@/components/dashboard/validation-trends"
import { DatasetList } from "@/components/dashboard/dataset-list"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <DashboardHeader />
      <DashboardStats />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ValidationTrends />
        <RecentValidations />
      </div>
      <DatasetList />
    </div>
  )
}

