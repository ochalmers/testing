import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Container } from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";

export default function CreditsPage() {
  return (
    <DashboardShell
      title="Credits"
      description="Usage and billing"
    >
      <Container>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              Credit usage coming soon.
            </p>
          </CardContent>
        </Card>
      </Container>
    </DashboardShell>
  );
}
