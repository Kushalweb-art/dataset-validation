"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CompareResults } from "@/components/compare/compare-results"
import { CompareSummary } from "@/components/compare/compare-summary"
import { CompareSchema } from "@/components/compare/compare-schema"

interface CompareTabsProps {
  id: string
}

export function CompareTabs({ id }: CompareTabsProps) {
  return (
    <Tabs defaultValue="results" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="results">Row Differences</TabsTrigger>
        <TabsTrigger value="summary">Summary</TabsTrigger>
        <TabsTrigger value="schema">Schema Changes</TabsTrigger>
      </TabsList>
      <TabsContent value="results">
        <CompareResults id={id} />
      </TabsContent>
      <TabsContent value="summary">
        <CompareSummary id={id} />
      </TabsContent>
      <TabsContent value="schema">
        <CompareSchema id={id} />
      </TabsContent>
    </Tabs>
  )
}

