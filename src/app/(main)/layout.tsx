import MainLayout from "@/components/common/page";
import React from "react";

const LayOut = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full flex justify-center">
      <MainLayout>{children}</MainLayout>
    </div>
  );
};

export default LayOut;
