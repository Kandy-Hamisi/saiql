import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen flex-1 flex-col px-5 xs:px-10 md:px-16">
      <div className="mx-auto max-w-7xl">{children}</div>
    </main>
  );
};
export default DashboardLayout;
