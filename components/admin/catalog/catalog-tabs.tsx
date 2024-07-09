"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { catalogTabs } from "@/lib/constants";

const CatalogTabs = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const handleChange = (value: string) => {
    setActiveTab(value);
  };
  return (
    <Tabs defaultValue="all" className="w-fit" onValueChange={handleChange}>
      <TabsList className=" h-[50px] w-[330px]">
        {catalogTabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} className="text-[1.1rem]">
            {tab.name}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value={activeTab}>
        My catalog Items
      </TabsContent>
    </Tabs>
  );
};

export default CatalogTabs;
