import s from "./Sidebar.module.css";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { activeLink, navlink } from "utils/navDetails";
import { useRouter } from "next/router";
import { useMoralis } from "react-moralis";
import pfps from "components/pfp";
import { LogOut } from "components/icons";
import useLogOut from "hooks/useLogOut";
import defaultPfpImage from "public/images/defaultpfp.svg";
const SideBar = () => {
  const { user } = useMoralis();
  const { logOut } = useLogOut();
  const router = useRouter();
  const currentRoute = router.pathname;
  console.log(currentRoute);
  return (
    <div className={s.root}>
      <div className={s.logoWrapper}>
        <div className={s.logo}>
          <Image
            src="/images/white.png"
            alt="logo"
            width={200}
            height={74}
            layout="responsive"
          />
        </div>
      </div>

      <div className={s.container}>
        <div className={s.userProfile}>
          <div className={s.profileImage}>
            <Image
              src={
                user?.attributes?.pfp ? user.attributes.pfp : defaultPfpImage
              }
              alt="logo"
              width={40}
              height={40}
              layout="responsive"
            />
          </div>

          <div className={s.userProfileDetails}>
            <p className={s.username}>
              {user?.attributes?.username ?? "username"}
            </p>
            <p className={s.userAddress}>
              {user?.attributes?.ethAddress
                ? `${user.attributes.ethAddress.slice(
                    0,
                    4
                  )}...${user.attributes.ethAddress.slice(38)}`
                : "No Address"}
            </p>
          </div>
        </div>

        <nav className={s.nav}>
          {navlink.map((item, index) => {
            const { name, link, icon } = item;
            const isActive = activeLink(currentRoute, link);
            const textClass = cn(s.text, {
              [s.activeText]: isActive,
            });
            return (
              <Link href={link} key={index} passHref>
                <a>
                  <div className={s.link}>
                    {icon({
                      color: isActive ? "white" : "#7681AB",
                      className: s.icon,
                    })}
                    <p className={textClass}>{name}</p>
                  </div>
                </a>
              </Link>
            );
          })}
        </nav>
      </div>
      <div className=" w-4/5 m-8">
        <div className={s.link} onClick={() => logOut()}>
          <LogOut className="cursor-pointer" />
          <p className={s.text}>Logout</p>
        </div>
      </div>
    </div>
  );
};

// 🍾 you have done well 🍾 🎊

export default SideBar;
