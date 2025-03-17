"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { PlusCircle, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function AdminRoles() {
  const [roles] = useState([
    {
      id: "role-001",
      name: "Admin",
      description: "Full access to all features",
      users: 2,
      permissions: [
        "Create/Edit/Delete Datasets",
        "Run Validations",
        "Compare Datasets",
        "Manage Users",
        "Manage System Settings",
      ],
    },
    {
      id: "role-002",
      name: "Analyst",
      description: "Can run validations and view reports",
      users: 5,
      permissions: ["Create/Edit Datasets", "Run Validations", "Compare Datasets"],
    },
    {
      id: "role-003",
      name: "Viewer",
      description: "Read-only access to dashboards",
      users: 8,
      permissions: ["View Datasets", "View Validation Results", "View Comparison Results"],
    },
  ])

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Roles</CardTitle>
        <Button className="gap-2">
          <PlusCircle className="h-4 w-4" />
          <span>Add Role</span>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Role</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Users</TableHead>
                <TableHead>Permissions</TableHead>
                <TableHead className="w-[80px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {roles.map((role) => (
                <TableRow key={role.id}>
                  <TableCell className="font-medium">{role.name}</TableCell>
                  <TableCell>{role.description}</TableCell>
                  <TableCell>{role.users}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {role.permissions.slice(0, 2).map((permission, index) => (
                        <Badge key={index} variant="outline" className="whitespace-nowrap">
                          {permission}
                        </Badge>
                      ))}
                      {role.permissions.length > 2 && (
                        <Badge variant="outline">+{role.permissions.length - 2} more</Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit Role</DropdownMenuItem>
                        <DropdownMenuItem>View Users</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate Role</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Delete Role</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

