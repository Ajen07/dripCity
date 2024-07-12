"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { catalogTabs } from "@/lib/constants";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const CatalogTabs = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value && value !== "all") {
      params.set("activeTab", value);
    } else {
      params.delete("activeTab");
    }
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <Tabs
      defaultValue={searchParams.get("activeTab")?.toString() || "all"}
      className="w-fit"
      onValueChange={handleChange}
    >
      <TabsList className=" h-[50px] w-[330px]">
        {catalogTabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="text-[1.1rem]"
          >
            {tab.name}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default CatalogTabs;
