import Container from "../Container";
import s from "./RightSidebar.module.css";
import cn from "classnames";
import { useRightsideHeaderControl } from "hooks/useRightsideHeaderControl";
import Input from "../Input";

const RightSidebar = () => {
  const { activeHeader, setNotificationActive, setTrendingActive } =
    useRightsideHeaderControl();
  const trendingClass = cn(s.header, {
    [s.active]: activeHeader === "trending",
  });

  const notificationClass = cn(s.header, {
    [s.active]: activeHeader === "notification",
  });

  // TODO
  return (
    <div className={s.root}>
      <div className={s.contentCase}>
        <div className={s.wrapper}>
          <div className={s.searchContainer}>
            <Container noMargin>
              <Input placeholder="Search CubeHub" type="search" />
            </Container>
            {/* NOTE */}
          </div>
          <div className={s.tabsContainer}>
            {/*  */}
            <div className={s.subHeading}>
              <h3 className={trendingClass} onClick={setTrendingActive}>
                Trending
              </h3>
              <h3 className={notificationClass} onClick={setNotificationActive}>
                Notification
              </h3>
            </div>
            <Container noMargin>
              <div className={s.tabContent}>
                {activeHeader === "trending" && (
                  <div className={s.trending}>
                    <div className={s.trending1}>trending!</div>
                  </div>
                )}
                {activeHeader === "notification" && <div>Notification</div>}
              </div>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
