"use client";

import React from "react";
import Header from "./header/Header";
import { cn } from "@/lib/utils";
import { SideBar, SubSidebar } from "./sidebar/SideBar";
import { useMenu } from "@/hooks/sidebar/useSidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isToggle } = useMenu();

  return (
    <>
      <div className="h-full w-full xl:max-w-[1920px]">
        <div className="h-[4.25rem] w-full xl:max-w-[1920px] fixed inset-y-0 z-50">
          <Header />
        </div>
        <div
          className={cn(
            "hidden xl:flex h-full w-[200px] flex-col fixed inset-y-0 z-50 mt-[4.25rem] transition-all duration-500 ease-in-out",
            isToggle && "transition-all duration-500 ease-in-out w-[74px]"
          )}
        >
          <SideBar />
        </div>
        <div
          className={cn(
            "h-full flex-col fixed inset-y-0 z-50 mt-[4.25rem] ml-[74px] transition-all duration-500 ease-in-out xl:ml-[200px]",
            isToggle && "transition-all duration-500 ease-in-out xl:ml-[74px]"
          )}
        >
          <SubSidebar />
        </div>
        <main
          className={cn(
            "pl-[74px] h-full xl:pl-[200px] pt-[4.25rem] min-w-[1024px] w-full",
            isToggle && "transition-all duration-500 ease-in-out xl:pl-[74px]"
          )}
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default MainLayout;
