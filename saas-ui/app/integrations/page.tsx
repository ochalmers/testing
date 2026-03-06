import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Container } from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";

export default function IntegrationsPage() {
  return (
    <DashboardShell
      title="Integrations"
      description="Connect your tools"
    >
      <Container>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              Integrations coming soon.
            </p>
          </CardContent>
        </Card>
      </Container>
    </DashboardShell>
  );
}
