import { ArrowRightLeft, ClipboardList, Home, Sheet, AppWindow } from "lucide-react";

export const mainRoutes = [
  {
    icon: Home,
    label: "홈",
    href: "/",
  },
  {
    icon: Sheet,
    label: "메모장",
    href: "/notebook",
  },
  {
    icon: AppWindow,
    label: "UI",
    href: "/shadcn",
  },
  {
    icon: ClipboardList,
    label: "게시판",
    href: "/board",
  },
  {
    icon: ArrowRightLeft,
    label: "Query",
    href: "/query",
  },
];

export const boardRoutes = [
  {
    label: "통합 게시판",
    href: "/board",
  },
  {
    label: "공지사항",
    href: "/board/notice",
  },
];
