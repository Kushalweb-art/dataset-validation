import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface CompareSchemaProps {
  id: string
}

export function CompareSchema({ id }: CompareSchemaProps) {
  // In a real app, fetch schema comparison data based on ID
  const schemaChanges = [
    {
      column: "email",
      sourceType: "VARCHAR(255)",
      targetType: "VARCHAR(255)",
      sourceNullable: false,
      targetNullable: false,
      changeType: "none",
    },
    {
      column: "phone",
      sourceType: "VARCHAR(20)",
      targetType: "VARCHAR(30)",
      sourceNullable: true,
      targetNullable: true,
      changeType: "modified",
    },
    {
      column: "address_line_2",
      sourceType: "VARCHAR(255)",
      targetType: null,
      sourceNullable: true,
      targetNullable: null,
      changeType: "deleted",
    },
    {
      column: "preferred_contact",
      sourceType: null,
      targetType: "VARCHAR(10)",
      sourceNullable: null,
      targetNullable: true,
      changeType: "added",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Schema Changes</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Column</TableHead>
              <TableHead>Change</TableHead>
              <TableHead>Source Type</TableHead>
              <TableHead>Target Type</TableHead>
              <TableHead>Source Nullable</TableHead>
              <TableHead>Target Nullable</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {schemaChanges.map((change) => (
              <TableRow
                key={change.column}
                className={
                  change.changeType === "added"
                    ? "bg-green-50 dark:bg-green-900/20"
                    : change.changeType === "deleted"
                      ? "bg-red-50 dark:bg-red-900/20"
                      : change.changeType === "modified"
                        ? "bg-yellow-50 dark:bg-yellow-900/20"
                        : ""
                }
              >
                <TableCell className="font-medium">{change.column}</TableCell>
                <TableCell>
                  {change.changeType !== "none" && (
                    <Badge
                      variant={
                        change.changeType === "added"
                          ? "outline"
                          : change.changeType === "deleted"
                            ? "destructive"
                            : "secondary"
                      }
                    >
                      {change.changeType.charAt(0).toUpperCase() + change.changeType.slice(1)}
                    </Badge>
                  )}
                </TableCell>
                <TableCell>{change.sourceType || "-"}</TableCell>
                <TableCell>{change.targetType || "-"}</TableCell>
                <TableCell>{change.sourceNullable === null ? "-" : change.sourceNullable ? "Yes" : "No"}</TableCell>
                <TableCell>{change.targetNullable === null ? "-" : change.targetNullable ? "Yes" : "No"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

