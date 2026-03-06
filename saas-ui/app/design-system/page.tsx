"use client";

import { useState } from "react";
import Link from "next/link";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormField } from "@/components/ui/form-field";
import { FileUpload } from "@/components/ui/file-upload";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Modal } from "@/components/common/modal";
import { EmptyState } from "@/components/common/empty-state";
import {
  DataTable,
  type Column,
} from "@/components/data/data-table";
import { TableToolbar } from "@/components/data/table-toolbar";
import { Pagination } from "@/components/data/pagination";
import { StatusBadge } from "@/components/data/status-badge";
import { tokens } from "@/design-system/tokens";
import { PlusIcon, PackageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const navSections = [
  { id: "tokens", label: "Tokens" },
  { id: "components", label: "Components" },
  { id: "layout", label: "Layout" },
  { id: "data", label: "Data" },
  { id: "forms", label: "Forms" },
];

const sampleTableData = [
  { id: "1", name: "Item A", status: "Active" },
  { id: "2", name: "Item B", status: "Pending" },
  { id: "3", name: "Item C", status: "Completed" },
];

export default function DesignSystemPage() {
  const [page, setPage] = useState(1);

  return (
    <DashboardShell
      title="Design System"
      description="Visual documentation for designers and engineers"
    >
      <div className="flex gap-8">
        <nav className="sticky top-24 hidden w-48 shrink-0 self-start lg:block">
          <ul className="space-y-1 text-sm">
            {navSections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="min-w-0 flex-1">
          <Container>
            {/* Tokens */}
            <Section id="tokens" spacing="lg">
              <h2 className="text-xl font-semibold tracking-tight mb-6">
                Tokens
              </h2>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Colors</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Semantic color tokens
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {[
                      ["background", "bg-background border"],
                      ["foreground", "bg-foreground"],
                      ["muted", "bg-muted"],
                      ["muted-foreground", "bg-muted-foreground"],
                      ["border", "bg-border"],
                      ["ring", "bg-ring"],
                      ["primary (brand)", "bg-primary text-primary-foreground"],
                    ].map(([label, cls]) => (
                      <div key={label} className="flex flex-col gap-1">
                        <div
                          className={cn("h-12 rounded-md", cls)}
                        />
                        <span className="text-xs text-muted-foreground">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Spacing</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap items-end gap-2">
                    {Object.entries(tokens.spacing).map(([k, v]) => (
                      <div key={k} className="flex flex-col items-center gap-1">
                        <div
                          className="bg-primary rounded-sm"
                          style={{ width: v, height: v, minWidth: 8, minHeight: 8 }}
                        />
                        <span className="text-xs text-muted-foreground">
                          {k}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Typography</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-2xl font-semibold tracking-tight">
                      Page Title
                    </p>
                    <p className="text-xs text-muted-foreground">
                      text-2xl font-semibold
                    </p>
                  </div>
                  <div>
                    <p className="text-xl font-semibold tracking-tight">
                      Section Title
                    </p>
                    <p className="text-xs text-muted-foreground">
                      text-xl font-semibold
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-medium">Subheading</p>
                    <p className="text-xs text-muted-foreground">
                      text-lg font-medium
                    </p>
                  </div>
                  <div>
                    <p className="text-base">Body text for content.</p>
                    <p className="text-xs text-muted-foreground">text-base</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Caption</p>
                    <p className="text-xs text-muted-foreground">
                      text-sm text-muted-foreground
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider">
                      Label
                    </p>
                    <p className="text-xs text-muted-foreground">
                      text-xs font-medium uppercase
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Radius & Shadow</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-6">
                    <div>
                      <div className="mb-2 h-16 w-16 rounded-md border bg-card shadow-sm" />
                      <p className="text-xs text-muted-foreground">sm</p>
                    </div>
                    <div>
                      <div className="mb-2 h-16 w-16 rounded-lg border bg-card shadow-md" />
                      <p className="text-xs text-muted-foreground">md</p>
                    </div>
                    <div>
                      <div className="mb-2 h-16 w-16 rounded-xl border bg-card shadow-lg" />
                      <p className="text-xs text-muted-foreground">lg</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Section>

            {/* Components */}
            <Section id="components" spacing="lg">
              <h2 className="text-xl font-semibold tracking-tight mb-6">
                Components
              </h2>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Buttons</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Primary, Secondary, Ghost, Destructive. Default, hover, disabled, loading.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-wrap gap-4">
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destructive</Button>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button disabled>Disabled</Button>
                    <Button loading>Loading</Button>
                    <Button>
                      <PlusIcon className="size-4" />
                      With icon
                    </Button>
                    <Button size="icon">
                      <PlusIcon className="size-4" />
                    </Button>
                    <Button size="sm">Small</Button>
                    <Button size="lg">Large</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Inputs</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Default, focus (tab to focus), disabled, error.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField label="Default" helperText="Helper text below input">
                    <Input placeholder="Placeholder" />
                  </FormField>
                  <FormField label="Disabled">
                    <Input placeholder="Disabled" disabled />
                  </FormField>
                  <FormField label="Error" error="This field has an error">
                    <Input placeholder="Error state" aria-invalid />
                  </FormField>
                  <FormField label="Textarea">
                    <Textarea placeholder="Multiline input" />
                  </FormField>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Checkbox & Switch</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-8">
                  <div className="flex items-center gap-2">
                    <Checkbox id="cb1" />
                    <Label htmlFor="cb1">Checkbox</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="cb2" disabled />
                    <Label htmlFor="cb2">Disabled</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="sw1" />
                    <Label htmlFor="sw1">Switch</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="sw2" disabled />
                    <Label htmlFor="sw2">Disabled</Label>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Select</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Choose..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="a">Option A</SelectItem>
                      <SelectItem value="b">Option B</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Cards</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      Default card content
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle>Card with header</CardTitle>
                      <Button size="sm">Action</Button>
                    </CardHeader>
                    <CardContent>Content with header actions</CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Metric card</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Subtitle
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-semibold">1,240</p>
                      <p className="text-sm text-muted-foreground">
                        +12% from last month
                      </p>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Badges</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-4">
                  <Badge>Neutral</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <StatusBadge status="success">Success</StatusBadge>
                  <StatusBadge status="warning">Warning</StatusBadge>
                  <StatusBadge status="error">Error</StatusBadge>
                  <StatusBadge status="info">Info</StatusBadge>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Tabs</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="tab1">
                    <TabsList>
                      <TabsTrigger value="tab1">Overview</TabsTrigger>
                      <TabsTrigger value="tab2">Activity</TabsTrigger>
                      <TabsTrigger value="tab3">Settings</TabsTrigger>
                    </TabsList>
                    <TabsContent value="tab1">
                      <p className="pt-4 text-sm text-muted-foreground">
                        Tab 1 content
                      </p>
                    </TabsContent>
                    <TabsContent value="tab2">
                      <p className="pt-4 text-sm text-muted-foreground">
                        Tab 2 content
                      </p>
                    </TabsContent>
                    <TabsContent value="tab3">
                      <p className="pt-4 text-sm text-muted-foreground">
                        Tab 3 content
                      </p>
                    </TabsContent>
                  </Tabs>
                  <div className="mt-6">
                    <Tabs defaultValue="a">
                      <TabsList>
                        <TabsTrigger value="a">Designers (3)</TabsTrigger>
                        <TabsTrigger value="b">Sales (12)</TabsTrigger>
                        <TabsTrigger value="c">Marketing (5)</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Modal</CardTitle>
                </CardHeader>
                <CardContent>
                  <Modal
                    trigger={<Button>Open modal</Button>}
                    title="Modal title"
                    description="Modal description goes here."
                    footer={
                      <>
                        <Button variant="outline">Cancel</Button>
                        <Button>Confirm</Button>
                      </>
                    }
                  >
                    <p className="text-sm text-muted-foreground">
                      Modal body content.
                    </p>
                  </Modal>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Tooltip & Dropdown</CardTitle>
                </CardHeader>
                <CardContent className="flex gap-4">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline">
                          Hover for tooltip
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Tooltip content</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">Dropdown menu</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuItem variant="destructive">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>EmptyState</CardTitle>
                </CardHeader>
                <CardContent>
                  <EmptyState
                    icon={<PackageIcon className="size-6" />}
                    title="No products yet"
                    description="Get started by creating your first product."
                    action={<Button>Add Product</Button>}
                  />
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Avatar</CardTitle>
                </CardHeader>
                <CardContent className="flex gap-4">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>CD</AvatarFallback>
                  </Avatar>
                </CardContent>
              </Card>
            </Section>

            {/* Layout */}
            <Section id="layout" spacing="lg">
              <h2 className="text-xl font-semibold tracking-tight mb-6">
                Layout
              </h2>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Container</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Default (1200px), narrow (720px), wide (1400px)
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="mx-auto max-w-[1200px] border border-dashed border-border p-4 text-center text-sm text-muted-foreground">
                      Default container
                    </div>
                    <div className="mx-auto max-w-[720px] border border-dashed border-border p-4 text-center text-sm text-muted-foreground">
                      Narrow container
                    </div>
                    <div className="mx-auto max-w-[1400px] border border-dashed border-border p-4 text-center text-sm text-muted-foreground">
                      Wide container
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>PageHeader</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <p className="text-sm text-muted-foreground">
                      Title, description, breadcrumbs, primary + secondary actions.
                    </p>
                    <p className="text-xs text-muted-foreground">
                      See any page (e.g. Products, Requests) for PageHeader usage.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Section>

            {/* Data */}
            <Section id="data" spacing="lg">
              <h2 className="text-xl font-semibold tracking-tight mb-6">
                Data
              </h2>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>DataTable + TableToolbar + Pagination</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <TableToolbar
                    searchPlaceholder="Search..."
                    onSearchChange={() => {}}
                    primaryAction={<Button size="sm">Add</Button>}
                  />
                  <DataTable
                    columns={[
                      { id: "name", header: "Name", accessor: "name" },
                      {
                        id: "status",
                        header: "Status",
                        accessor: (row) => (
                          <StatusBadge
                            status={
                              row.status === "Active" ? "success" : "default"
                            }
                          >
                            {row.status}
                          </StatusBadge>
                        ),
                      },
                    ]}
                    data={sampleTableData}
                    keyExtractor={(r) => r.id}
                  />
                  <Pagination
                    page={page}
                    totalPages={3}
                    onPageChange={setPage}
                  />
                </CardContent>
              </Card>
            </Section>

            {/* Forms */}
            <Section id="forms" spacing="lg">
              <h2 className="text-xl font-semibold tracking-tight mb-6">
                Forms
              </h2>
              <Card>
                <CardHeader>
                  <CardTitle>FormField + FileUpload</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    label="File upload"
                    helperText="Accepts images and PDFs"
                  >
                    <FileUpload
                      accept=".png,.jpg,.pdf"
                      onFilesSelected={() => {}}
                    />
                  </FormField>
                </CardContent>
              </Card>
            </Section>
          </Container>
        </div>
      </div>
    </DashboardShell>
  );
}
