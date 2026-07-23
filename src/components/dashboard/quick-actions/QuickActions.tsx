import Card from "@/components/common/Card";
import SectionHeader from "@/components/common/SectionHeader";
import QuickActionCard from "./QuickActionCard";
import { quickActions } from "./quickActionsData";

export default function QuickActions() {
  return (
    <Card className="p-6">
      <SectionHeader title="Quick Actions" />

      <div className="grid grid-cols-2 gap-3">
        {quickActions.map((action) => (
          <QuickActionCard
            key={action.id}
            action={action}
          />
        ))}
      </div>
    </Card>
  );
}