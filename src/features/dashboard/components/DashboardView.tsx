import Charts from "@/features/dashboard/components/Charts";
import KpiCard from "@/features/dashboard/components/KpiCards";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      <KpiCard />
      <Charts />
    </div>
  );
}
