import { CompareDetails } from "@/components/compare/compare-details"
import { CompareActions } from "@/components/compare/compare-actions"
import { CompareTabs } from "@/components/compare/compare-tabs"

export default function CompareDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <CompareDetails id={params.id} />
        <CompareActions id={params.id} />
      </div>
      <CompareTabs id={params.id} />
    </div>
  )
}

