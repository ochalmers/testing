import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Container } from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <DashboardShell
      title="Settings"
      description="Account and preferences"
    >
      <Container>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              Settings coming soon.
            </p>
          </CardContent>
        </Card>
      </Container>
    </DashboardShell>
  );
}
