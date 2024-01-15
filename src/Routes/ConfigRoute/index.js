import { Route } from "react-router-dom";

import { Admin } from "../../Component/Admin";
import { OverviewCensor } from "../../Component/Admin/Content/CensorContent";
import { OverviewUser } from "../../Component/Admin/Content/UserContent";
import { OverviewSinger } from "../../Component/Admin/Content/SingerContent";
import { OverviewSong } from "../../Component/Admin/Content/SongContent";
import { StatisticalMain } from "../../Component/Admin/Content/StatisticalContent";
import Login from "../../Login";
const RoutesConfig = [
  {
    path: "",
    element: <Login />,
  },
  {
    element: <Admin />,
    children: [
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
    ],
  },
];

export default RoutesConfig;
