"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export function SettingsValidation() {
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
          <CardTitle>Validation Settings</CardTitle>
          <CardDescription>Configure default validation behavior</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Automated Validation</h3>
            <div className="flex items-center justify-between space-y-0">
              <Label htmlFor="auto-validation">Enable Automated Validation</Label>
              <Switch id="auto-validation" defaultChecked />
            </div>
            <div className="space-y-2">
              <Label htmlFor="validation-frequency">Default Validation Frequency</Label>
              <Select defaultValue="daily">
                <SelectTrigger id="validation-frequency">
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hourly">Hourly</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Default Thresholds</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="missing-threshold">Missing Value Threshold (%)</Label>
                <Input id="missing-threshold" type="number" defaultValue="5" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="invalid-threshold">Invalid Value Threshold (%)</Label>
                <Input id="invalid-threshold" type="number" defaultValue="2" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duplicate-threshold">Duplicate Value Threshold (%)</Label>
                <Input id="duplicate-threshold" type="number" defaultValue="0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="outlier-threshold">Outlier Threshold (z-score)</Label>
                <Input id="outlier-threshold" type="number" defaultValue="3" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Soda Core Configuration</h3>
            <div className="space-y-2">
              <Label htmlFor="soda-path">Soda Core Path</Label>
              <Input id="soda-path" defaultValue="/usr/local/bin/soda" />
            </div>
            <div className="flex items-center justify-between space-y-0">
              <Label htmlFor="use-docker">Use Docker Container</Label>
              <Switch id="use-docker" />
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

