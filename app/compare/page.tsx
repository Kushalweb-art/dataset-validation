import { CompareHeader } from "@/components/compare/compare-header"
import { CompareForm } from "@/components/compare/compare-form"
import { CompareHistory } from "@/components/compare/compare-history"

export default function ComparePage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <CompareHeader />
      <CompareForm />
      <CompareHistory />
    </div>
  )
}

