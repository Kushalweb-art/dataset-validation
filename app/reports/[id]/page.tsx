import { ReportDetails } from "@/components/reports/report-details"
import { ReportActions } from "@/components/reports/report-actions"
import { ReportContent } from "@/components/reports/report-content"

export default function ReportDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <ReportDetails id={params.id} />
        <ReportActions id={params.id} />
      </div>
      <ReportContent id={params.id} />
    </div>
  )
}

