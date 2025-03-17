"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Save, Code } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"

interface ValidationRulesProps {
  id: string
}

export function ValidationRules({ id }: ValidationRulesProps) {
  const [yamlContent, setYamlContent] = useState(`# Soda Core YAML configuration
dataset_name: customer_data
metrics:
  - row_count
  - missing_count
  - missing_percentage
  - duplicate_count
  - duplicate_percentage
  - min
  - max
  - avg
  - sum
  - invalid_percentage
  - invalid_count

tests:
  - row_count > 0
  - duplicate_count(customer_id) = 0
  - missing_percentage(email) < 1
  - missing_percentage(first_name) = 0
  - missing_percentage(last_name) = 0
  
columns:
  customer_id:
    valid_format: string
    tests:
      - invalid_percentage = 0
  email:
    valid_format: email
    tests:
      - invalid_percentage < 5
  phone:
    valid_format: phone_number
    tests:
      - missing_percentage < 10
  zip_code:
    valid_format: us_zip_code
    tests:
      - invalid_percentage < 2
`)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Validation Rules</CardTitle>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <Plus className="h-4 w-4" />
            <span>Add Rule</span>
          </Button>
          <Button className="gap-2">
            <Save className="h-4 w-4" />
            <span>Save Rules</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="yaml">
          <TabsList className="mb-4">
            <TabsTrigger value="yaml" className="gap-2">
              <Code className="h-4 w-4" />
              YAML Editor
            </TabsTrigger>
            <TabsTrigger value="visual">Visual Editor</TabsTrigger>
          </TabsList>
          <TabsContent value="yaml">
            <Textarea
              className="font-mono h-[500px]"
              value={yamlContent}
              onChange={(e) => setYamlContent(e.target.value)}
            />
          </TabsContent>
          <TabsContent value="visual">
            <div className="rounded-md border p-4 text-center text-muted-foreground">
              Visual rule editor coming soon
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

