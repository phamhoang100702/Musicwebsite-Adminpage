import {UserOutlined} from "@ant-design/icons";
import { Link } from "react-router-dom";



const MenuSiderbar = [

    {
    key: "1",
    icon: <UserOutlined />,
    label: <Link to="/user">User</Link>,
  },
  {
    key: "2",
    icon: <UserOutlined />,
    label: <Link to="/singer">Singer</Link>,
  },
  {
    key: 3,
    icon: <UserOutlined />,
    label: <Link to="/censor">Censor</Link>,
  },
  {
    key: 4,
    icon: <UserOutlined />,
    label: <Link to="/song">Song</Link>,
  },
  {
    key: 5,
    icon: <UserOutlined />,
    label: <Link to="/statistical">Statistical</Link>,
  },
];

export default MenuSiderbar;
