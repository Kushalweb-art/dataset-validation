import { ValidationHeader } from "@/components/validations/validation-header"
import { ValidationFilters } from "@/components/validations/validation-filters"
import { ValidationTable } from "@/components/validations/validation-table"

export default function ValidationsPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <ValidationHeader />
      <ValidationFilters />
      <ValidationTable />
    </div>
  )
}

