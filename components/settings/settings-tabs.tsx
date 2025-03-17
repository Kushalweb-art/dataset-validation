"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SettingsProfile } from "@/components/settings/settings-profile"
import { SettingsNotifications } from "@/components/settings/settings-notifications"
import { SettingsValidation } from "@/components/settings/settings-validation"
import { SettingsAppearance } from "@/components/settings/settings-appearance"

export function SettingsTabs() {
  return (
    <Tabs defaultValue="profile" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
        <TabsTrigger value="validation">Validation</TabsTrigger>
        <TabsTrigger value="appearance">Appearance</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <SettingsProfile />
      </TabsContent>
      <TabsContent value="notifications">
        <SettingsNotifications />
      </TabsContent>
      <TabsContent value="validation">
        <SettingsValidation />
      </TabsContent>
      <TabsContent value="appearance">
        <SettingsAppearance />
      </TabsContent>
    </Tabs>
  )
}

