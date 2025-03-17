import { DatasetHeader } from "@/components/datasets/dataset-header"
import { DatasetTable } from "@/components/datasets/dataset-table"
import { DatasetFilters } from "@/components/datasets/dataset-filters"

export default function DatasetsPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <DatasetHeader />
      <DatasetFilters />
      <DatasetTable />
    </div>
  )
}

