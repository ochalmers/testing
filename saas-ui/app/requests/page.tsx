"use client";

import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Container } from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";
import { DataTable, type Column } from "@/components/data/data-table";
import { TableToolbar } from "@/components/data/table-toolbar";
import { StatusBadge } from "@/components/data/status-badge";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

interface Request {
  id: string;
  ref: string;
  type: string;
  status: "pending" | "in_progress" | "completed" | "failed";
  createdAt: string;
}

const mockRequests: Request[] = [
  { id: "1", ref: "REQ-0842", type: "3D Render", status: "completed", createdAt: "2 hours ago" },
  { id: "2", ref: "REQ-0841", type: "Config Export", status: "in_progress", createdAt: "5 hours ago" },
  { id: "3", ref: "REQ-0840", type: "Asset Upload", status: "pending", createdAt: "Yesterday" },
  { id: "4", ref: "REQ-0839", type: "3D Render", status: "failed", createdAt: "2 days ago" },
];

const statusMap = {
  pending: "default" as const,
  in_progress: "info" as const,
  completed: "success" as const,
  failed: "error" as const,
};

const columns: Column<Request>[] = [
  { id: "ref", header: "Reference", accessor: "ref" },
  { id: "type", header: "Type", accessor: "type" },
  {
    id: "status",
    header: "Status",
    accessor: (row) => (
      <StatusBadge status={statusMap[row.status]}>
        {row.status.replace("_", " ")}
      </StatusBadge>
    ),
  },
  { id: "created", header: "Created", accessor: "createdAt" },
];

export default function RequestsPage() {
  return (
    <DashboardShell
      title="Requests"
      description="Track render and export requests"
      breadcrumbs={[{ label: "Requests", href: "/requests" }]}
      primaryAction={
        <Button>
          <PlusIcon className="size-4" />
          New Request
        </Button>
      }
    >
      <Container>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <TableToolbar
                searchPlaceholder="Search requests..."
                onSearchChange={() => {}}
              />
              <DataTable
                columns={columns}
                data={mockRequests}
                keyExtractor={(r) => r.id}
              />
            </div>
          </CardContent>
        </Card>
      </Container>
    </DashboardShell>
  );
}
