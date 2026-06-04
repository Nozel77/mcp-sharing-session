"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const TabsContext = React.createContext<{
  value: string;
  onValueChange: (value: string) => void;
} | null>(null);

function Tabs({
  value,
  defaultValue,
  onValueChange,
  className,
  children,
}: React.ComponentProps<"div"> & {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}) {
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? "");
  const currentValue = value ?? internalValue;
  const setValue = React.useCallback(
    (nextValue: string) => {
      setInternalValue(nextValue);
      onValueChange?.(nextValue);
    },
    [onValueChange],
  );

  return (
    <TabsContext.Provider value={{ value: currentValue, onValueChange: setValue }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

function TabsList({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("inline-flex items-center rounded-lg bg-[#0b1b33] p-1", className)} {...props} />;
}

function TabsTrigger({ value, className, ...props }: React.ComponentProps<"button"> & { value: string }) {
  const context = React.useContext(TabsContext);
  const active = context?.value === value;

  return (
    <button
      type="button"
      className={cn(
        "rounded-md px-4 py-1.5 text-xs font-semibold text-[#8fb9d8] transition-colors",
        active && "bg-[#1591DC]/25 text-white shadow-sm",
        className,
      )}
      onClick={() => context?.onValueChange(value)}
      {...props}
    />
  );
}

function TabsContent({ value, className, ...props }: React.ComponentProps<"div"> & { value: string }) {
  const context = React.useContext(TabsContext);
  if (context?.value !== value) return null;

  return <div className={cn("mt-5", className)} {...props} />;
}

export { Tabs, TabsContent, TabsList, TabsTrigger };
