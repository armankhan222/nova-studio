import {
  Sparkles,
  ShieldCheck,
  LayoutDashboard,
  CheckCircle2,
} from "lucide-react";

import { GlassCard } from "@/shared/components/ui/glass-card";

export function HeroPreview() {
  return (
    <GlassCard className="w-full max-w-lg p-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">
          Nova Studio Review
        </h3>

        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
          94 / 100
        </span>
      </div>

      <div className="mt-6 space-y-4">
        <ReviewRow
          icon={<Sparkles size={18} />}
          title="UX Review"
          status="Excellent"
        />

        <ReviewRow
          icon={<ShieldCheck size={18} />}
          title="Accessibility"
          status="Passed"
        />

        <ReviewRow
          icon={<LayoutDashboard size={18} />}
          title="Hierarchy"
          status="Strong"
        />
      </div>

      <div className="mt-8 rounded-2xl bg-violet-50 p-4">
        <div className="flex gap-2">
          <CheckCircle2
            size={18}
            className="text-violet-600"
          />

          <p className="text-sm text-slate-700">
            Increase CTA spacing by 8px to improve
            conversion and visual hierarchy.
          </p>
        </div>
      </div>
    </GlassCard>
  );
}

function ReviewRow({
  icon,
  title,
  status,
}: {
  icon: React.ReactNode;
  title: string;
  status: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-100 p-3">
      <div className="flex items-center gap-3">
        {icon}
        <span>{title}</span>
      </div>

      <span className="font-medium text-green-600">
        {status}
      </span>
    </div>
  );
}
