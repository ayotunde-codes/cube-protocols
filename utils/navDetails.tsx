import { Chat, CubePad, Home, Profile, Setting } from "components/icons";
import { useRouter } from "next/router";

export function activeLink(pathname: string, link: string) {
  return pathname === link;
}

export const navlink = [
  {
    name: "Home",
    link: "/home",
    icon: ({ ...props }) => <Home {...props} />,
  },
  {
    name: "Cube Space",
    link: "/cube-space",
    icon: ({ ...props }) => <CubePad {...props} />,
  },
  {
    name: "Chat",
    link: "/chat",
    icon: ({ ...props }) => <Chat {...props} />,
  },
  {
    name: "Profile",
    link: "/profile",
    icon: ({ ...props }) => <Profile {...props} />,
  },
  {
    name: "Settings",
    link: "/settings",
    icon: ({ ...props }) => <Setting {...props} />,
  },
];
