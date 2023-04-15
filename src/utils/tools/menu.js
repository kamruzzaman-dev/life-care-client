import { AiOutlineDashboard } from "react-icons/ai";
import { RiProfileLine } from "react-icons/ri";
import { MdOutlineBloodtype, MdDashboard } from "react-icons/md";
import { BiDonateBlood } from "react-icons/bi";
export const menus = [
  // ************************************* common dashboard menu ************************/
  {
    id: "y4h935g783b548",
    menu: "dashboard",
    icon: <MdDashboard />,
    route: "/dashboard",
    permission: ["donor"],
  },
  {
    id: "7dfsrs8srf",
    menu: "profile",
    icon: <RiProfileLine />,
    permission: ["donor"],
    dropdown: [
      {
        id: "w4g54gw45",
        menu: "Donor's profile",
        icon: <RiProfileLine />,
        route: "/dashboard/donor-info",
        permission: ["donor"],
      },
      {
        id: "45g354g35g3w",
        menu: "Doctor's profile",
        icon: <RiProfileLine />,
        route: "/dashboard/doctor-info",
        permission: ["doctor"],
      },
    ],
  },
  {
    id: "4782fh7483g",
    menu: "Blood Donations",
    icon: <BiDonateBlood />,
    permission: ["donor"],
    dropdown: [
      {
        id: "5g3w544g",
        menu: "Request send",
        icon: <BiDonateBlood />,
        route: "/dashboard/donations-request-send",
        permission: ["donor"],
      },
      {
        id: "54g354435g",
        menu: "Request receive",
        icon: <BiDonateBlood />,
        route: "/dashboard/donations-request-receive",
        permission: ["donor"],
      },
    ],
  },
  {
    id: "54hg748g54g",
    menu: "blood request",
    icon: <MdOutlineBloodtype />,
    route: "/dashboard/blood-request",
    permission: ["donor"],
  },
];
