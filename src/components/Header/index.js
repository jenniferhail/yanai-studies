import PropTypes from 'prop-types'
import cn from 'classnames'
import { Link, withRouter } from 'react-router-dom'
import styles from './index.module.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as Search } from '../../assets/search.svg'

// nav-up

const Header = (props) => {
  return (
    <header className={styles.header}>
      <nav className={styles.main_menu}>
        <div className={styles.logo}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <ul className={styles.menu}>
          <li
            className={
              styles.menu_item +
              ` ${props.location.pathname === '/experience' ? 'active' : ''}`
            }>
            <Link to="/experience">Experience</Link>
          </li>
          <li
            className={
              styles.menu_item +
              ` ${props.location.pathname === '/explore' ? 'active' : ''}`
            }>
            <Link to="/explore">Explore</Link>
          </li>
          <li
            className={
              styles.menu_item +
              ` last ${props.location.pathname === '/engage' ? 'active' : ''}`
            }>
            <Link to="/engage">Engage</Link>
          </li>
          <li className={cn(styles.border, styles.lang)}>Eng 日本</li>
          <li className={cn(styles.border, styles.search)}>
            <Search />
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

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export default withRouter(Header)
