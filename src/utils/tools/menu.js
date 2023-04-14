import { AiOutlineDashboard } from "react-icons/ai";
import { RiProductHuntLine } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
export const menus = [
  // ************************************* common dashboard menu ************************//
  {
    id: "337fwe4dkf",
    menu: "select product",
    icon: <AiOutlineDashboard />,
    route: "/dashboard",
    permission: ["user"],
  },
  {
    id: "w4g54gw45",
    menu: "donor's profile",
    icon: <RiProductHuntLine />,
    route: "/dashboard/donor-info",
    permission: ["donor"],
  },
  {
    id: "45g354g35g3w",
    menu: "Doctor's profile",
    icon: <RiProductHuntLine />,
    route: "/dashboard/doctor-info",
    permission: ["doctor"],
  },
  {
    id: "7dfsrs8srf",
    menu: "Donations",
    icon: <MdOutlineSupportAgent />,
    permission: ["donor"],
    dropdown: [
      {
        id: "5g3w544g",
        menu: "Request send",
        icon: <RiProductHuntLine />,
        route: "/dashboard/donations-request-get",
        permission: ["donor"],
      },
      {
        id: "54g354435g",
        menu: "Request receive",
        icon: <RiProductHuntLine />,
        route: "/dashboard/donations-request-receive",
        permission: ["donor"],
      },
    ],
  },
  {
    id: "54hg748g54g",
    menu: "blood request",
    icon: <RiProductHuntLine />,
    route: "/dashboard/blood-request",
    permission: ["donor"],
  },
];
