import styles from './index.module.scss'
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
