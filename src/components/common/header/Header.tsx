"use client";

import { Button } from "@/components/ui/button";
import { useMenu } from "@/hooks/sidebar/useSidebar";
import { LogOut, Menu } from "lucide-react";
import React from "react";

const Header = () => {
  const { onToggle } = useMenu();

  return (
    <>
      <div className="px-[2.25rem] border-b h-full flex items-center bg-white shadow-sm ">
        <div className="flex">
          <div onClick={onToggle} className="hidden transition-all duration-1000 ease-in-out xl:flex cursor-pointer  hover:text-blue-500">
            <Menu />
          </div>
          <div className="ml-[1.38rem] font-bold">HoyaNote</div>
        </div>
        <div className="flex gap-x-2 ml-auto">
          <Button size="sm" variant="ghost">
            <LogOut className="h-4 w-4 mr-2" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
