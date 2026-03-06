"use client";

import { useState } from "react";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Container } from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DataTable, type Column } from "@/components/data/data-table";
import { TableToolbar } from "@/components/data/table-toolbar";
import { FilterBar } from "@/components/data/filter-bar";
import { Pagination } from "@/components/data/pagination";
import { EmptyState } from "@/components/common/empty-state";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PlusIcon, MoreHorizontalIcon, PackageIcon } from "lucide-react";

interface Product {
  id: string;
  name: string;
  sku: string;
  status: string;
  updatedAt: string;
}

const mockProducts: Product[] = [
  { id: "1", name: "Mattress Pro 2.0", sku: "MP-200", status: "Active", updatedAt: "2 hours ago" },
  { id: "2", name: "Hybrid Comfort Plus", sku: "HCP-100", status: "Draft", updatedAt: "Yesterday" },
  { id: "3", name: "Classic Memory Foam", sku: "CMF-050", status: "Active", updatedAt: "3 days ago" },
];

const columns: Column<Product>[] = [
  { id: "name", header: "Product", accessor: "name" },
  { id: "sku", header: "SKU", accessor: "sku" },
  { id: "status", header: "Status", accessor: "status" },
  { id: "updated", header: "Updated", accessor: "updatedAt" },
  {
    id: "actions",
    header: "",
    accessor: () => null,
    className: "w-[50px]",
  },
];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const filtered = mockProducts.filter((p) => {
    const matchesSearch =
      !search || p.name.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || p.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });
  const isEmpty = filtered.length === 0 && (search || statusFilter !== "all");

  return (
    <DashboardShell
      title="Products"
      description="Manage your product catalog"
      breadcrumbs={[{ label: "Products", href: "/products" }]}
      primaryAction={
        <Button>
          <PlusIcon className="size-4" />
          Add Product
        </Button>
      }
    >
      <Container>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <TableToolbar
                searchPlaceholder="Search products..."
                searchValue={search}
                onSearchChange={setSearch}
                filters={
                  <FilterBar>
                    <Select
                      value={statusFilter}
                      onValueChange={setStatusFilter}
                    >
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All status</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="draft">Draft</SelectItem>
                      </SelectContent>
                    </Select>
                  </FilterBar>
                }
                primaryAction={
                  <Button size="sm">
                    <PlusIcon className="size-4" />
                    Add Product
                  </Button>
                }
              />

              {isEmpty ? (
                <EmptyState
                  icon={<PackageIcon className="size-6" />}
                  title="No products found"
                  description="Try adjusting your search or filters."
                  action={
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearch("");
                        setStatusFilter("all");
                      }}
                    >
                      Clear filters
                    </Button>
                  }
                />
              ) : (
                <>
                  <DataTable
                    columns={[
                      ...columns.slice(0, -1),
                      {
                        id: "actions",
                        header: "",
                        accessor: (row) => (
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon-sm">
                                <MoreHorizontalIcon className="size-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>View</DropdownMenuItem>
                              <DropdownMenuItem variant="destructive">
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        ),
                        className: "w-[50px]",
                      },
                    ]}
                    data={filtered}
                    keyExtractor={(r) => r.id}
                  />
                  <Pagination
                    page={page}
                    totalPages={Math.ceil(filtered.length / 10) || 1}
                    onPageChange={setPage}
                  />
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </Container>
    </DashboardShell>
  );
}
