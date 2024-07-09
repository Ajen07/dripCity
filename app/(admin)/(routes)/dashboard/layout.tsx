import AdminSidebar from "@/components/admin/sidebar/admin-side-bar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="md:flex h-full w-[220px] z-30 flex-col fixed inset-y-0">
        <AdminSidebar />
      </div>
      <main className="md:pl-[220px] h-full">{children}</main>
    </div>
  );
};

export default MainLayout;
