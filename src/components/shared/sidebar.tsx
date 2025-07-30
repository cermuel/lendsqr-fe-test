import { SIDE_MENU_LINKS } from "../../constants";
import "../../styles/components/siderbar.scss";
import { VscClose } from "react-icons/vsc";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar = ({ isOpen, onClose }: Props) => {
  const isActiveRoute = (route: string | undefined) => {
    if (!route) return false;
    return window.location.pathname.includes(route);
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar__header">
        <div
          className="mobileClose"
          onClick={onClose}
          aria-label="Close sidebar"
          role="button"
        >
          <VscClose size={20} color="#213f7d" />
        </div>
        <img src="/images/logo.svg" className="sidebar__logo" alt="logo" />
      </div>
      <button className="sidebar__orgBtn">
        <img src="/icons/org.svg" alt="" />
        <span>Switch Organization</span>
        <img src="/icons/down.svg" alt="" />
      </button>
      <ul className="sidebar__nav">
        {SIDE_MENU_LINKS.map((l, index: number) => (
          <li className="sidebar__section" key={index}>
            <p className="sidebar__headerR">{l.header}</p>
            {l.links.map((link, idx: number) => (
              <div
                key={idx}
                className={`sidebar__link ${
                  isActiveRoute(link.url) ? "active" : ""
                }`}
              >
                <img src={link.icon} alt={link.title} />
                <span>{link.title}</span>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
