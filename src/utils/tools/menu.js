import { AiOutlineDashboard } from "react-icons/ai";
import { RiProductHuntLine } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
export const menus = [
  // ************************************* common dashboard menu ************************/
  {
    id: "7dfsrs8srf",
    menu: "profile",
    icon: <MdOutlineSupportAgent />,
    permission: ["donor"],
    dropdown: [
      {
        id: "w4g54gw45",
        menu: "Donor's profile",
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
        id: "54g354435g",
        menu: "Update profile",
        icon: <RiProductHuntLine />,
        route: "/dashboard/donor-update",
        permission: ["donor"],
      },
    ],
  },
  {
    id: "4782fh7483g",
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
