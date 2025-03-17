"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export function SettingsNotifications() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Configure how you receive notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Email Notifications</h3>
            <div className="flex items-center justify-between space-y-0">
              <Label htmlFor="validation-failed">Validation Failed</Label>
              <Switch id="validation-failed" defaultChecked />
            </div>
            <div className="flex items-center justify-between space-y-0">
              <Label htmlFor="validation-success">Validation Success</Label>
              <Switch id="validation-success" />
            </div>
            <div className="flex items-center justify-between space-y-0">
              <Label htmlFor="dataset-changes">Dataset Changes</Label>
              <Switch id="dataset-changes" defaultChecked />
            </div>
            <div className="flex items-center justify-between space-y-0">
              <Label htmlFor="comparison-complete">Comparison Complete</Label>
              <Switch id="comparison-complete" defaultChecked />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">In-App Notifications</h3>
            <div className="flex items-center justify-between space-y-0">
              <Label htmlFor="in-app-validation">Validation Results</Label>
              <Switch id="in-app-validation" defaultChecked />
            </div>
            <div className="flex items-center justify-between space-y-0">
              <Label htmlFor="in-app-dataset">Dataset Updates</Label>
              <Switch id="in-app-dataset" defaultChecked />
            </div>
            <div className="flex items-center justify-between space-y-0">
              <Label htmlFor="in-app-system">System Notifications</Label>
              <Switch id="in-app-system" defaultChecked />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

