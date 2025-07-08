import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "./Navbar";
import SidebarLayout from "./Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen">
        <Navbar />
        <div className="flex flex-1 overflow-auto">
          <SidebarLayout />
          <main className="flex-1 overflow-auto p-4">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
