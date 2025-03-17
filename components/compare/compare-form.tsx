"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GitCompare } from "lucide-react"

export function CompareForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Compare Datasets</CardTitle>
        <CardDescription>Select source and target datasets to compare</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="font-medium">Source Dataset</div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select source dataset" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="customer-data">Customer Data</SelectItem>
                <SelectItem value="sales-transactions">Sales Transactions</SelectItem>
                <SelectItem value="product-inventory">Product Inventory</SelectItem>
                <SelectItem value="marketing-campaigns">Marketing Campaigns</SelectItem>
                <SelectItem value="user-analytics">User Analytics</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select version/date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest (Jul 24, 2023)</SelectItem>
                <SelectItem value="jul-23">Jul 23, 2023</SelectItem>
                <SelectItem value="jul-22">Jul 22, 2023</SelectItem>
                <SelectItem value="jul-21">Jul 21, 2023</SelectItem>
                <SelectItem value="jul-20">Jul 20, 2023</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-4">
            <div className="font-medium">Target Dataset</div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select target dataset" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="customer-data">Customer Data</SelectItem>
                <SelectItem value="sales-transactions">Sales Transactions</SelectItem>
                <SelectItem value="product-inventory">Product Inventory</SelectItem>
                <SelectItem value="marketing-campaigns">Marketing Campaigns</SelectItem>
                <SelectItem value="user-analytics">User Analytics</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select version/date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest (Jul 24, 2023)</SelectItem>
                <SelectItem value="jul-23">Jul 23, 2023</SelectItem>
                <SelectItem value="jul-22">Jul 22, 2023</SelectItem>
                <SelectItem value="jul-21">Jul 21, 2023</SelectItem>
                <SelectItem value="jul-20">Jul 20, 2023</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="gap-2">
          <GitCompare className="h-4 w-4" />
          <span>Compare Datasets</span>
        </Button>
      </CardFooter>
    </Card>
  )
}

