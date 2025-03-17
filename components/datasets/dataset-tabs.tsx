"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DatasetPreview } from "@/components/datasets/dataset-preview"
import { ValidationHistory } from "@/components/datasets/validation-history"
import { DatasetMetadata } from "@/components/datasets/dataset-metadata"
import { ValidationRules } from "@/components/datasets/validation-rules"

interface DatasetTabsProps {
  id: string
}

export function DatasetTabs({ id }: DatasetTabsProps) {
  return (
    <Tabs defaultValue="preview" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="preview">Data Preview</TabsTrigger>
        <TabsTrigger value="validations">Validation History</TabsTrigger>
        <TabsTrigger value="metadata">Metadata</TabsTrigger>
        <TabsTrigger value="rules">Validation Rules</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <DatasetPreview id={id} />
      </TabsContent>
      <TabsContent value="validations">
        <ValidationHistory id={id} />
      </TabsContent>
      <TabsContent value="metadata">
        <DatasetMetadata id={id} />
      </TabsContent>
      <TabsContent value="rules">
        <ValidationRules id={id} />
      </TabsContent>
    </Tabs>
  )
}

