"use client";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hook/use-mobile";
import { MenuIcon, Sidebar, XIcon } from "lucide-react";
import { createContext, useContext, useMemo, useState } from "react";

type SidebarContextProps = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextProps | null>(null);

function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

type SidebarProviderProps = {
  children: React.ReactNode;
  defaultOpen?: boolean;
};

function SidebarProvider({ children, defaultOpen = true }: SidebarProviderProps) {
  const [open, setOpen] = useState(defaultOpen);
  const [openMobile, setOpenMobile] = useState(false);
  const isMobile = useIsMobile();

  const toggleSidebar = () => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
  };

  const state = open ? "expanded" : "collapsed";
  const contextValue = useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      openMobile,
      setOpenMobile,
      isMobile,
      toggleSidebar,
    }),
    [state, open, openMobile, isMobile, toggleSidebar]
  );

  return <SidebarContext.Provider value={contextValue}>{children}</SidebarContext.Provider>;
}

function SideBarToggle() {
  const { toggleSidebar, isMobile, openMobile } = useSidebar();
  console.log(openMobile);
  return (
    <Button onClick={() => toggleSidebar()} variant={"ghost"} size={"icon"}>
      {isMobile ? (
        openMobile ? (
          <XIcon className="!size-8" />
        ) : (
          <MenuIcon aria-activedescendant="active-item" className="!size-8" />
        )
      ) : (
        <Sidebar aria-activedescendant="active-item" className="h-6 w-6" />
      )}
    </Button>
  );
}

export default SideBarToggle;
export { SidebarProvider, useSidebar };
