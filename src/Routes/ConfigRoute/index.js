import { Route } from "react-router-dom";

import { Admin } from "../../Component/Admin";
import { OverviewCensor } from "../../Component/Admin/Content/CensorContent/overview";
import { OverviewUser } from "../../Component/Admin/Content/UserContent";
import { OverviewSinger } from "../../Component/Admin/Content/SingerContent/overview";
import { OverviewSong } from "../../Component/Admin/Content/SongContent";
import { Payment } from "../../Component/Admin/Content/PaymentContent/Payment";
import { StatisticalMain } from "../../Component/Admin/Content/StatisticalContent";

const RoutesConfig = [
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/admin-manage-censors",
    element: <OverviewCensor />,
  },
  {
    path: "/admin-manage-users",
    element: <OverviewUser />,
  },
  {
    path: "/admin-manage-singers",
    element: <OverviewSinger />,
  },
  {
    path: "/admin-manage-songs",
    element: <OverviewSong />,
  },

  {
    path: "/admin-statistical",
    element: <StatisticalMain />,
  },
  {
    path: "/admin-payment",
    element: <Payment />,
  },
];

export default RoutesConfig;
