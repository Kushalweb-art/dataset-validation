import { DatasetDetails } from "@/components/datasets/dataset-details"
import { DatasetActions } from "@/components/datasets/dataset-actions"
import { DatasetTabs } from "@/components/datasets/dataset-tabs"
import { DatasetMetadata } from "@/components/datasets/dataset-metadata"

export default function DatasetDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <DatasetDetails id={params.id} />
        <DatasetActions id={params.id} />
      </div>
      <DatasetMetadata id={params.id} />
      <DatasetTabs id={params.id} />
    </div>
  )
}

