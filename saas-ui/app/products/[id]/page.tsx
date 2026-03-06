"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Container } from "@/components/layout/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProductDetailPage() {
  const params = useParams();
  const id = params.id as string;

  return (
    <DashboardShell
      title={`Product ${id}`}
      description="Product details and settings"
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: id, href: `/products/${id}` },
      ]}
      primaryAction={<Button>Save changes</Button>}
      secondaryAction={
        <Button variant="outline" asChild>
          <Link href="/products">Back</Link>
        </Button>
      }
    >
      <Container>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="assets">Assets</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Product info</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm text-muted-foreground">Name</dt>
                    <dd className="font-medium">Sample Product</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">SKU</dt>
                    <dd className="font-medium">SKU-{id}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted-foreground">Status</dt>
                    <dd>
                      <Badge>Active</Badge>
                    </dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="activity">
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">
                  Activity history will appear here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="assets">
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">
                  Asset management will appear here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="settings">
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">
                  Product settings will appear here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Container>
    </DashboardShell>
  );
}
