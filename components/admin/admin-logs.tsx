"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Download, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function AdminLogs() {
  // In a real app, fetch logs from API
  const logs = [
    {
      timestamp: "2023-07-24 14:32:01",
      level: "INFO",
      user: "John Doe",
      action: "Login",
      details: "User logged in successfully",
      ip: "192.168.1.1",
    },
    {
      timestamp: "2023-07-24 14:35:22",
      level: "INFO",
      user: "John Doe",
      action: "Dataset Created",
      details: "Created dataset 'Customer Data'",
      ip: "192.168.1.1",
    },
    {
      timestamp: "2023-07-24 14:40:15",
      level: "INFO",
      user: "John Doe",
      action: "Validation Run",
      details: "Started validation run RUN-12345",
      ip: "192.168.1.1",
    },
    {
      timestamp: "2023-07-24 14:41:37",
      level: "WARN",
      user: "System",
      action: "Validation Warning",
      details: "Validation warning: invalid_percentage(phone) < 2 (1.8% < 2%)",
      ip: "127.0.0.1",
    },
    {
      timestamp: "2023-07-24 15:01:42",
      level: "INFO",
      user: "Jane Smith",
      action: "Login",
      details: "User logged in successfully",
      ip: "192.168.1.2",
    },
    {
      timestamp: "2023-07-24 15:05:18",
      level: "INFO",
      user: "Jane Smith",
      action: "Dataset Comparison",
      details: "Started comparison between 'Customer Data (Jul 24, 2023)' and 'Customer Data (Jul 23, 2023)'",
      ip: "192.168.1.2",
    },
    {
      timestamp: "2023-07-24 15:30:05",
      level: "ERROR",
      user: "System",
      action: "Database Connection",
      details: "Failed to connect to database: Connection timeout",
      ip: "127.0.0.1",
    },
    {
      timestamp: "2023-07-24 15:32:11",
      level: "INFO",
      user: "System",
      action: "Database Connection",
      details: "Database connection restored",
      ip: "127.0.0.1",
    },
    {
      timestamp: "2023-07-24 16:15:33",
      level: "INFO",
      user: "John Doe",
      action: "Logout",
      details: "User logged out",
      ip: "192.168.1.1",
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Audit Logs</CardTitle>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          <span>Export Logs</span>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search logs..." className="pl-8" />
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Log Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="info">Info</SelectItem>
                <SelectItem value="warn">Warning</SelectItem>
                <SelectItem value="error">Error</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="User" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Users</SelectItem>
                <SelectItem value="john">John Doe</SelectItem>
                <SelectItem value="jane">Jane Smith</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
              <span className="sr-only">More filters</span>
            </Button>
          </div>
        </div>
        <div className="rounded-md border bg-muted/50 p-4">
          <pre className="font-mono text-xs leading-relaxed">
            {logs.map((log, index) => (
              <div
                key={index}
                className={`${log.level === "WARN" ? "text-yellow-600 dark:text-yellow-400" : log.level === "ERROR" ? "text-red-600 dark:text-red-400" : ""}`}
              >
                {log.timestamp} [{log.level}] {log.user} - {log.action} - {log.details} (IP: {log.ip})
              </div>
            ))}
          </pre>
        </div>
      </CardContent>
    </Card>
  )
}

