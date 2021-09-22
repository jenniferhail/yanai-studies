import cn from 'classnames'
import styles from './index.module.scss'

const Hero = (params) => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.bottom}>
          <h1>
            Supporting academic programming and cultural exchanges between{' '}
            <em>UCLA</em> and <em>Waseda University</em>.
          </h1>
          <p>どこは同年ようやくその記憶方に対して。</p>
        </div>
      </div>
      <div className={styles.animation}></div>
    </section>
  )
}

export default Hero
