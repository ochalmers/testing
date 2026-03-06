import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Container } from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";

export default function AssetsPage() {
  return (
    <DashboardShell
      title="Assets"
      description="Manage your digital assets"
    >
      <Container>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              Asset library coming soon.
            </p>
          </CardContent>
        </Card>
      </Container>
    </DashboardShell>
  );
}
