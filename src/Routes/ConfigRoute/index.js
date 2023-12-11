import { Route } from "react-router-dom";
import { UserManage } from "../../Component/Admin/Content/UserContent/UserManage";
import { SingerManage } from "../../Component/Admin/Content/SingerContent/SingerManage";
import {
  CensorAddNew,
  CensorManage,
} from "../../Component/Admin/Content/CensorContent/CensorManage";
import { SongManage } from "../../Component/Admin/Content/SongContent/SongManage";
import { Statistical } from "../../Component/Admin/Content/Statistical";
import { Admin } from "../../Component/Admin";
import { OverviewCensor } from "../../Component/Admin/Content/CensorContent/overview";
import { OverviewUser } from "../../Component/Admin/Content/UserContent/overview";
import { OverviewSinger } from "../../Component/Admin/Content/SingerContent/overview";
import { OverviewSong } from "../../Component/Admin/Content/SongContent/overview";
import { Payment } from "../../Component/Admin/Content/PaymentContent/Payment";

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
    element: <Statistical />,
  },
  {
    path: "/admin-payment",
    element: <Payment />,
  },
];

export default RoutesConfig;
