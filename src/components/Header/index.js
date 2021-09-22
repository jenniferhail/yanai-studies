import cn from "classnames";
import { Link, withRouter } from "react-router-dom";
import styles from "./index.module.scss"

// nav-up

const Header = (props) => {
  return (
    <header className={styles.header}>
  <nav className={styles.main_menu}>
    <div className={styles.logo}>
      <Link to="/">
        <svg width="262" height="20" viewBox="0 0 262 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M41.5242 0H0V20H41.5242V0Z" fill="#323232" />
          <path d="M56.3877 20V12L51.5698 0H55.7063L58.4803 7.38823L61.2542 0H65.3907L60.5728 12V20H56.3877Z" fill="#323232" />
          <path d="M68.1159 20H63.9794L70.8412 0H74.9777L81.8881 20H77.7516L76.389 16H69.4786L68.1159 20ZM70.8412 12H74.9777L72.9338 5.45882L70.8412 12Z" fill="#323232" />
          <path d="M84.1754 20V0H88.3119L93.8597 11.9059V0H97.9962V20H93.8597L88.3119 8.09412V20H84.1754Z" fill="#323232" />
          <path d="M104.371 20H100.235L107.097 0H111.233L118.144 20H114.007L112.644 16H105.734L104.371 20ZM107.097 12H111.233L109.189 5.45882L107.097 12Z" fill="#323232" />
          <path d="M120.431 0H124.567V20H120.431V0Z" fill="#323232" />
          <path d="M134.884 0H139.021V20H134.884V0Z" fill="#323232" />
          <path d="M143.255 20V0H147.391L152.939 11.9059V0H157.075V20H152.939L147.391 8.09412V20H143.255Z" fill="#323232" />
          <path d="M161.358 0H165.495V20H161.358V0Z" fill="#323232" />
          <path d="M173.038 20V4H168.22V0H181.992V4H177.174V20H173.038Z" fill="#323232" />
          <path d="M184.766 0H188.903V20H184.766V0Z" fill="#323232" />
          <path d="M195.57 20H191.433L198.295 0H202.431L209.342 20H205.205L203.843 16H196.932L195.57 20ZM198.295 12H202.431L200.387 5.45882L198.295 12Z" fill="#323232" />
          <path d="M212.748 20V4H207.93V0H221.702V4H216.885V20H212.748Z" fill="#323232" />
          <path d="M224.476 0H228.613V20H224.476V0Z" fill="#323232" />
          <path d="M244.916 0L240.098 20H235.913L231.144 0H235.28L238.054 12.6118L240.779 0H244.916Z" fill="#323232" />
          <path d="M251.583 4V8H259.175V12.0471H251.583V16H261.267V20H247.495V0H261.267V4H251.583Z" fill="#323232" />
        </svg>
      </Link>
    </div>
    <ul className={styles.menu}>
      <li className={styles.menu_item + ` ${props.location.pathname === "/experience" ? "active" : "" }`}>
        <Link to="/experience">
          Experience
        </Link>
      </li>
      <li className={styles.menu_item + ` ${props.location.pathname === "/explore" ? "active" : "" }`}>
        <Link to="/explore">
          Explore
        </Link>
      </li>
      <li className={styles.menu_item + ` last ${props.location.pathname === "/engage" ? "active" : "" }`}>
        <Link to="/engage">
          Engage
        </Link>
      </li>
      <li className={cn(styles.border, styles.lang)}>Eng</li>
      <li className={cn(styles.border, styles.search)}><svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.0964 8.6743C17.0964 12.8733 13.5333 16.3486 9.04822 16.3486C4.56312 16.3486 1 12.8733 1 8.6743C1 4.47526 4.56312 1 9.04822 1C13.5333 1 17.0964 4.47526 17.0964 8.6743Z" stroke="#323232" stroke-width="2" />
          <line y1="-1" x2="9.80968" y2="-1" transform="matrix(0.721869 0.69203 -0.721869 0.69203 14.9492 14.3325)" stroke="#323232" stroke-width="2" />
        </svg>
      </li>
    </ul>
  </nav>
  {/* <nav className={styles.sub-menu}>
    <ul className={styles.menu}>
      <li>
        <Link to="/about">
          About
        </Link>
      </li>
      <li>
        <Link to="/people">
          People
        </Link>
      </li>
      <li>
        <Link to="/projects">
          Projects
        </Link>
      </li>
      <li>
        <Link to="/publications">
          Publications
        </Link>
      </li>
    </ul>
  </nav> */}
</header>
  )
}

export default withRouter(Header);