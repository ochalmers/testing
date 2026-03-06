import Link from "next/link";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Container } from "@/components/layout/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { Grid } from "@/components/layout/grid";
import { PlusIcon, ArrowRightIcon } from "lucide-react";

export default function DashboardPage() {
  return (
    <DashboardShell title="Dashboard" description="Overview of your account">
      <Container>
        <Section spacing="md">
          <Grid cols={1} sm={2} lg={3} gap={6}>
            <Card>
              <CardHeader>
                <CardTitle className="text-base font-medium">
                  Total Products
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold">24</p>
                <p className="text-sm text-muted-foreground">
                  +2 from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base font-medium">
                  Active Requests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold">8</p>
                <p className="text-sm text-muted-foreground">
                  3 in progress
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base font-medium">
                  Credits Used
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold">1,240</p>
                <p className="text-sm text-muted-foreground">
                  of 5,000 this month
                </p>
              </CardContent>
            </Card>
          </Grid>

          <Section spacing="sm">
            <h2 className="text-xl font-semibold tracking-tight mb-4">
              Recent Activity
            </h2>
            <Card>
              <CardContent className="pt-6">
                <Stack gap={4}>
                  {[
                    {
                      action: "Product updated",
                      detail: "Mattress Pro 2.0 — Size variant added",
                      time: "2 hours ago",
                    },
                    {
                      action: "Request completed",
                      detail: "REQ-0842 — 3D render ready",
                      time: "5 hours ago",
                    },
                    {
                      action: "New product created",
                      detail: "Hybrid Comfort Plus",
                      time: "Yesterday",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start justify-between gap-4 border-b border-border pb-4 last:border-0 last:pb-0"
                    >
                      <div>
                        <p className="font-medium">{item.action}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.detail}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground shrink-0">
                        {item.time}
                      </p>
                    </div>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Section>

          <div className="flex justify-center pt-8">
            <Button variant="outline" asChild>
              <Link href="/products">
                View all products
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
          </div>
        </Section>
      </Container>
    </DashboardShell>
  );
}
