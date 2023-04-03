import { AiOutlineDashboard } from "react-icons/ai";
import { RiProductHuntLine } from "react-icons/ri";
export const menus = [
  // ************************************* common dashboard menu ************************//
  {
    id: "337fwedkf",
    menu: "select product",
    icon: <AiOutlineDashboard />,
    route: "/dashboard",
    permission: ["user"],
  },
  {
    id: "3498ghw4wg8",
    menu: "view product",
    icon: <RiProductHuntLine />,
    route: "/dashboard/view-product",
    permission: ["user"],
  },
];
