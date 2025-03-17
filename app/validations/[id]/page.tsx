import { ValidationDetails } from "@/components/validations/validation-details"
import { ValidationActions } from "@/components/validations/validation-actions"
import { ValidationTabs } from "@/components/validations/validation-tabs"

export default function ValidationDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <ValidationDetails id={params.id} />
        <ValidationActions id={params.id} />
      </div>
      <ValidationTabs id={params.id} />
    </div>
  )
}

