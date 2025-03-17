"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AdminUsers } from "@/components/admin/admin-users"
import { AdminRoles } from "@/components/admin/admin-roles"
import { AdminSettings } from "@/components/admin/admin-settings"
import { AdminLogs } from "@/components/admin/admin-logs"

export function AdminTabs() {
  return (
    <Tabs defaultValue="users" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="users">Users</TabsTrigger>
        <TabsTrigger value="roles">Roles</TabsTrigger>
        <TabsTrigger value="settings">System Settings</TabsTrigger>
        <TabsTrigger value="logs">Audit Logs</TabsTrigger>
      </TabsList>
      <TabsContent value="users">
        <AdminUsers />
      </TabsContent>
      <TabsContent value="roles">
        <AdminRoles />
      </TabsContent>
      <TabsContent value="settings">
        <AdminSettings />
      </TabsContent>
      <TabsContent value="logs">
        <AdminLogs />
      </TabsContent>
    </Tabs>
  )
}

