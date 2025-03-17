"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ValidationResults } from "@/components/validations/validation-results"
import { ValidationSummary } from "@/components/validations/validation-summary"
import { ValidationLogs } from "@/components/validations/validation-logs"

interface ValidationTabsProps {
  id: string
}

export function ValidationTabs({ id }: ValidationTabsProps) {
  return (
    <Tabs defaultValue="results" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="results">Results</TabsTrigger>
        <TabsTrigger value="summary">Summary</TabsTrigger>
        <TabsTrigger value="logs">Logs</TabsTrigger>
      </TabsList>
      <TabsContent value="results">
        <ValidationResults id={id} />
      </TabsContent>
      <TabsContent value="summary">
        <ValidationSummary id={id} />
      </TabsContent>
      <TabsContent value="logs">
        <ValidationLogs id={id} />
      </TabsContent>
    </Tabs>
  )
}

