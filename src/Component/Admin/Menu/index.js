import {
  AreaChartOutlined,
  AuditOutlined,
  BankOutlined,
  CustomerServiceOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const MenuSiderbar = [
  getItem(
    <Link to="/admin-statistical">Statistical</Link>,
    "statistical",
    <AreaChartOutlined />
  ),

  getItem(
    <Link to="/admin-manage-users">Users</Link>,
    "users",
    <UserOutlined />
    // [
    //   getItem(<Link to="/add-new-user">Add new user</Link>, "add-new"),
    //   getItem(<Link to="/edit-user">Edit user</Link>, "edit"),
    //   getItem(<Link to="/delete-user">Delete user</Link>, "delete"),
    // ]
  ),

  getItem(
    <Link to="/admin-manage-singers">Singers</Link>,
    "singers",
    <CustomerServiceOutlined />
    // [
    //   getItem(<Link to="/add-new-singer">Add new singer</Link>, "add-new"),
    //   getItem(<Link to="/edit-singer">Edit singers</Link>, "edit"),
    //   getItem(<Link to="/delete-singer">Delete singer</Link>, "delete"),
    // ]
  ),

  getItem(
    <Link to="/admin-manage-censors">Censors</Link>,
    "censors",
    <AuditOutlined />
    // [
    //   getItem(<Link to="/add-new-censor">Add new censor</Link>, "add-new"),
    //   getItem(<Link to="/edit-censor">Edit censor</Link>, "edit"),
    //   getItem(<Link to="/delete-censor">Delete censor</Link>, "delete"),
    // ]
  ),
  getItem(
    <Link to="/admin-manage-songs">Songs</Link>,
    "songs",
    <CustomerServiceOutlined />
    // [
    //   getItem(<Link to="/add-new-song">Add new song</Link>, "add-new"),
    //   getItem(<Link to="/edit-song">Edit song</Link>, "edit"),
    //   getItem(<Link to="/delete-song">Delete song</Link>, "delete"),
    // ]
  ),

  //   {
  //     key: "user",
  //     icon: <UserOutlined />,
  //     label:
  //   },
  //   {
  //     key: "singer",
  //     icon: <UserOutlined />,
  //     label: <Link to="/singer">Singer</Link>,
  //   },
  //   {
  //     key: "censor",
  //     icon: <AuditOutlined />,
  //     label: <Link to="/censor">Censor</Link>,
  //   },
  //   {
  //     key: "song",
  //     icon: <CustomerServiceOutlined />,
  //     label: <Link to="/song">Songs</Link>,
  //   },
];

export default MenuSiderbar;
