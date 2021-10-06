import PropTypes from 'prop-types'
import cn from 'classnames'
import { Link, withRouter } from 'react-router-dom'
import styles from './index.module.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as Search } from '../../assets/search.svg'
import { Canvas } from '..'

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <Canvas className={styles.canvas} />
        <div className={styles.front}>
          <nav>
            <span>Explore • もっと知る</span>
            <ul>
              <li>About</li>
              <li>People</li>
              <li>Projects</li>
              <li>Publications</li>
            </ul>
          </nav>
        </div>
        <div className={styles.back}>
          <nav>
            <span>Explore • もっと知る</span>
            <ul>
              <li>だいたい</li>
              <li>だいたい</li>
              <li>だいたい</li>
              <li>だいたい</li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  )
}

export default Footer
