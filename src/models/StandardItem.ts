// TODO update this to match backend model
export interface IStandardItem {
  id: number;
  title: string;
  description: string;
  publishDate: string;
  type: "Standard" | "Other";
  status: "Current" | "Other";
}
