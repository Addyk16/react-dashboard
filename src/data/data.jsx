import { GoHome } from "react-icons/go";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoCalendarClearOutline } from "react-icons/io5";
import { IoMdBook } from "react-icons/io";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoWalletOutline } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";

export const navigationLinks = [
  {
    id: 1,
    title: "Dashboard",
    icon: <GoHome className="nav-link-icon" />,
  },
  {
    id: 2,
    title: "My Course",
    icon: (
      <FaRegCirclePlay className="nav-link-icon" />
    ),
  },
  {
    id: 3,
    title: "Calendar",
    icon: (
      <IoCalendarClearOutline className="nav-link-icon" />
    ),
  },
  {
    id: 4,
    title: "Resource",
    icon: <IoMdBook className="nav-link-icon" />,
  },
  {
    id: 5,
    title: "Quiz",
    icon: (
      <IoExtensionPuzzleOutline className="nav-link-icon" />
    ),
  },
  {
    id: 6,
    title: "Message",
    icon: (
      <FiMessageSquare className="nav-link-icon" />
    ),
  },
  {
    id: 7,
    title: "My Status",
    icon: <FaArrowTrendUp className="nav-link-icon" />,
  },
  {
    id: 8,
    title: "Wallet",
    icon: (
      <IoWalletOutline className="nav-link-icon" />
    ),
  },
  {
    id: 9,
    title: "My Account",
    icon: <IoMdPerson className="nav-link-icon" />,
  },
];

export const statData = [
  {
    key: 1,
    value: 10,
  },
  {
    key: 2,
    value: 16,
  },
  {
    key: 3,
    value: 13,
  },
  {
    key: 4,
    value: 18,
  },
  {
    key: 5,
    value: 12,
  },
  {
    key: 6,
    value: 15,
  },
  {
    key: 7,
    value: 12,
  },
  {
    key: 8,
    value: 18,
  },
];

export const graphData = [
  {
    date: "Jan",
    "Course Visit": 890,
    "Course Sale": 1245,
  },
  {
    date: "Feb",
    "Course Visit": 2756,
    "Course Sale": 3403,
  },
  {
    date: "Mar",
    "Course Visit": 2322,
    "Course Sale": 3154,
  },
  {
    date: "Apr",
    "Course Visit": 3470,
    "Course Sale": 2108,
  },
  {
    date: "May",
    "Course Visit": 2475,
    "Course Sale": 3212,
  },
  {
    date: "Jun",
    "Course Visit": 3129,
    "Course Sale": 1726,
  },
];

export const barData = [
  {
    name: "Mon",
    Visitors: 82,
  },
  {
    name: "Tue",
    Visitors: 45,
  },
  {
    name: "Wed",
    Visitors: 33,
  },
  {
    name: "Thu",
    Visitors: 55,
  },
  {
    name: "Fri",
    Visitors: 32,
  },
  {
    name: "Sat",
    Visitors: 18,
  },
];

export const pieData = [
  { key: "Current Week", value: 2000 },
  {
    key: "Last Week",
    value: 1500,
  },
];

export const queryData = [
  {
    id: 1,
    title: "Machine Learning Bootcamp",
    subtitle: "by James",
    status: "View",
  },
  {
    id: 2,
    title: "Python and R",
    subtitle: "Data Science",
    status: "Approve",
  },
  {
    id: 3,
    title: "Artificial Intelligence",
    subtitle: "Data Science",
    status: "Approve",
  },
  {
    id: 4,
    title: "React Bootcamp",
    subtitle: "Front End",
    status: "Approve",
  },
];
