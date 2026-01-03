import Charts from "@/features/dashboard/DashboardCharts/Charts";
import KpiCard from "@/features/dashboard/KPICards/KpiCard";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      <KpiCard />
      <Charts />
    </div>
  );
}
