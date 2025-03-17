import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ValidationLogsProps {
  id: string
}

export function ValidationLogs({ id }: ValidationLogsProps) {
  // In a real app, fetch validation logs based on ID
  const logs = [
    { timestamp: "2023-07-24 14:32:01", level: "INFO", message: "Starting validation run RUN-12345" },
    { timestamp: "2023-07-24 14:32:02", level: "INFO", message: "Connected to dataset 'Customer Data'" },
    { timestamp: "2023-07-24 14:32:03", level: "INFO", message: "Loading validation configuration" },
    { timestamp: "2023-07-24 14:32:04", level: "INFO", message: "Running check: Row count check" },
    { timestamp: "2023-07-24 14:32:05", level: "INFO", message: "Check passed: row_count > 0 (15243 > 0)" },
    { timestamp: "2023-07-24 14:32:06", level: "INFO", message: "Running check: Duplicate customer ID check" },
    {
      timestamp: "2023-07-24 14:32:10",
      level: "INFO",
      message: "Check passed: duplicate_count(customer_id) = 0 (0 = 0)",
    },
    { timestamp: "2023-07-24 14:32:11", level: "INFO", message: "Running check: Email missing check" },
    {
      timestamp: "2023-07-24 14:32:15",
      level: "INFO",
      message: "Check passed: missing_percentage(email) < 1 (0.2% < 1%)",
    },
    { timestamp: "2023-07-24 14:32:16", level: "INFO", message: "Running check: First name missing check" },
    {
      timestamp: "2023-07-24 14:32:20",
      level: "INFO",
      message: "Check passed: missing_percentage(first_name) = 0 (0% = 0%)",
    },
    { timestamp: "2023-07-24 14:32:21", level: "INFO", message: "Running check: Last name missing check" },
    {
      timestamp: "2023-07-24 14:32:25",
      level: "INFO",
      message: "Check passed: missing_percentage(last_name) = 0 (0% = 0%)",
    },
    { timestamp: "2023-07-24 14:32:26", level: "INFO", message: "Running check: Email format check" },
    {
      timestamp: "2023-07-24 14:32:30",
      level: "INFO",
      message: "Check passed: invalid_percentage(email) < 5 (0.5% < 5%)",
    },
    { timestamp: "2023-07-24 14:32:31", level: "INFO", message: "Running check: Phone number format check" },
    {
      timestamp: "2023-07-24 14:32:35",
      level: "WARN",
      message: "Check warning: invalid_percentage(phone) < 2 (1.8% < 2%)",
    },
    { timestamp: "2023-07-24 14:32:36", level: "INFO", message: "Validation completed: 6 passed, 0 failed, 1 warning" },
    { timestamp: "2023-07-24 14:32:37", level: "INFO", message: "Total execution time: 45s" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Validation Logs</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border bg-muted/50 p-4">
          <pre className="font-mono text-xs leading-relaxed">
            {logs.map((log, index) => (
              <div
                key={index}
                className={`${log.level === "WARN" ? "text-yellow-600 dark:text-yellow-400" : log.level === "ERROR" ? "text-red-600 dark:text-red-400" : ""}`}
              >
                {log.timestamp} [{log.level}] {log.message}
              </div>
            ))}
          </pre>
        </div>
      </CardContent>
    </Card>
  )
}

