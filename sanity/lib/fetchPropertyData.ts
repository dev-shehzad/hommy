import { client } from "./client";

export async function fetchPropertyData() {
  const tabsData = await client.fetch(`*[_type == "propertii"]`);
  const propertiesData = await client.fetch(
    `*[_type == "properti"]{..., tabs[]->, image{asset->{url}}}`
  );

  const allTabExists = tabsData.some((tab: { _id: string; }) => tab._id === "all");
  const updatedTabs = allTabExists
    ? tabsData
    : [{ _id: "all", title: "All" }, ...tabsData];

  return { tabs: updatedTabs, properties: propertiesData };
}
