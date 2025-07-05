import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSideber from "@/modules/dashboard/ui/components/dashboard-sidebar";

interface Props {
    children: React.ReactNode;
}

const layout = ({children}: Props) => {
  return (
    <SidebarProvider>
        <DashboardSideber/>
        <main className="flex flex-col h-screen w-screen bg-muted">
        {children}
        </main>
    </SidebarProvider>
  );
};

export default layout