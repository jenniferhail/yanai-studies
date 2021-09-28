// import cn from 'classnames'
import Character from './character'
import styles from './index.module.scss'
// import { ReactComponent as Character } from '../../assets/character.svg'

const Hero = () => {
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
      <div className={styles.animation}>
        <Character />
      </div>
    </section>
  )
}

export default Hero
