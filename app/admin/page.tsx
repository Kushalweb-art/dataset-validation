import { AdminHeader } from "@/components/admin/admin-header"
import { AdminTabs } from "@/components/admin/admin-tabs"

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <AdminHeader />
      <AdminTabs />
    </div>
  )
}

