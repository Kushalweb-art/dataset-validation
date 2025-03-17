"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useTheme } from "next-themes"
import { useState } from "react"

export function SettingsAppearance() {
  const { setTheme, theme } = useTheme()
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
          <CardTitle>Appearance</CardTitle>
          <CardDescription>Customize the appearance of the application</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Theme</h3>
            <RadioGroup defaultValue={theme} onValueChange={setTheme} className="grid grid-cols-3 gap-4">
              <div>
                <RadioGroupItem value="light" id="theme-light" className="sr-only" />
                <Label
                  htmlFor="theme-light"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                >
                  <div className="mb-2 rounded-md bg-white p-2 shadow-sm">
                    <div className="space-y-2">
                      <div className="h-2 w-[80px] rounded-lg bg-[#eaeaea]" />
                      <div className="h-2 w-[100px] rounded-lg bg-[#eaeaea]" />
                    </div>
                  </div>
                  <span className="block w-full text-center">Light</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem value="dark" id="theme-dark" className="sr-only" />
                <Label
                  htmlFor="theme-dark"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                >
                  <div className="mb-2 rounded-md bg-slate-950 p-2 shadow-sm">
                    <div className="space-y-2">
                      <div className="h-2 w-[80px] rounded-lg bg-slate-800" />
                      <div className="h-2 w-[100px] rounded-lg bg-slate-800" />
                    </div>
                  </div>
                  <span className="block w-full text-center">Dark</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem value="system" id="theme-system" className="sr-only" />
                <Label
                  htmlFor="theme-system"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                >
                  <div className="mb-2 rounded-md bg-gradient-to-r from-white to-slate-950 p-2 shadow-sm">
                    <div className="space-y-2">
                      <div className="h-2 w-[80px] rounded-lg bg-gradient-to-r from-[#eaeaea] to-slate-800" />
                      <div className="h-2 w-[100px] rounded-lg bg-gradient-to-r from-[#eaeaea] to-slate-800" />
                    </div>
                  </div>
                  <span className="block w-full text-center">System</span>
                </Label>
              </div>
            </RadioGroup>
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

