import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface TabsProps {
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
}

interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

interface TabContextType {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const TabContext = React.createContext<TabContextType | undefined>(undefined);

const useTabContext = () => {
  const context = React.useContext(TabContext);
  if (!context) {
    throw new Error("Tab components must be used within a Tabs component");
  }
  return context;
};

export const Tabs = ({ defaultValue, children, className }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn("w-full", className)}>
        {children}
      </div>
    </TabContext.Provider>
  );
};

export const TabsList = ({ children, className }: TabsListProps) => {
  return (
    <div
      className={cn(
        // Layout & size
        "flex flex-wrap lg:flex-nowrap items-center gap-2 w-full overflow-x-auto scrollbar-hide",
        // Visual theme (dark glassy + border)
        "bg-neutral-900/60 backdrop-blur-sm border border-neutral-800/70 rounded-xl p-2",
        className
      )}
    >
      {children}
    </div>
  );
};

export const TabsTrigger = ({ value, children, className }: TabsTriggerProps) => {
  const { activeTab, setActiveTab } = useTabContext();
  const isActive = activeTab === value;

  return (
    <button
      type="button"
      onClick={() => setActiveTab(value)}
      className={cn(
        // Base layout & sizing
        "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-4 py-2 text-sm md:text-base font-medium transition-colors break-keep",
        // Border / background neutral style
        "border border-transparent",
        // Focus styles
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950",
        // Disabled
        "disabled:pointer-events-none disabled:opacity-50",
        // Active / inactive theme
        isActive
          ? "bg-amber-500 text-white shadow-md border-amber-400"
          : "text-neutral-300 hover:text-white hover:bg-amber-500/15",
        className
      )}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ value, children, className }: TabsContentProps) => {
  const { activeTab } = useTabContext();
  
  if (activeTab !== value) return null;

  return (
    <div className={cn(
      "mt-6 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2",
      className
    )}>
      {children}
    </div>
  );
};
