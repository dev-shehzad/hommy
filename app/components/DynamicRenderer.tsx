"use client";

import { FC } from "react";
import HousePage from "@/app/components/HousePage"; // Yeh pehle se bana hai
// Aur bhi components yahan import kar sakta hai
// import AnotherComponent from "@/app/components/AnotherComponent";

interface DynamicRendererProps {
  componentType: string;
  componentProps: any;
}

const DynamicRenderer: FC<DynamicRendererProps> = ({ componentType, componentProps }) => {
  const componentMap: Record<string, FC<any>> = {
    housePage: HousePage,
    // "anotherComponent": AnotherComponent,  // Future components ke liye add kar sakte hain
  };

  const Component = componentMap[componentType];

  if (!Component) {
    return <p>Component `{componentType}` not found</p>;
  }

  return <Component {...componentProps} />;
};

export default DynamicRenderer;
