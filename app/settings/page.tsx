import { SettingsTabs } from "@/components/settings/settings-tabs"
import { SettingsHeader } from "@/components/settings/settings-header"

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <SettingsHeader />
      <SettingsTabs />
    </div>
  )
}

