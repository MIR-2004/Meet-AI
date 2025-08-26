import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardNavbar from "@/modules/dashboard/ui/components/dashboard-navbar";
import DashboardSideber from "@/modules/dashboard/ui/components/dashboard-sidebar";

interface Props {
    children: React.ReactNode;
}

const layout = ({children}: Props) => {
  return (
    <SidebarProvider>
        <DashboardSideber/>
        <main className="flex flex-col w-screen bg-muted">
          <DashboardNavbar/>
        {children}
        </main>
    </SidebarProvider>
  );
};

export default layout;