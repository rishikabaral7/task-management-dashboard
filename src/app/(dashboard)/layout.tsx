import DashboardLayout from "@/components/layout/DashboardLayout";
import ProtectedRoute from "@/components/layout/ProtectedRoute";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("Dashboard layout rendered");

  return (
    <ProtectedRoute>
      <DashboardLayout>{children}</DashboardLayout>
    </ProtectedRoute>
  );
}