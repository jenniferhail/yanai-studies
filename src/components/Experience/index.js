// import cn from 'classnames'
import styles from './index.module.scss'
// import Poster from '../../assets/event-poster.jpg'

const Experience = () => {
  return (
    <section className={styles.experience}>
      <div className={styles.content}>{/* <Poster /> */}</div>
      <div className={styles.animation}>
        <h3>Event Title Here</h3>
      </div>
      <div className={styles.label}>
        <h2>Experience</h2>
      </div>
    </section>
  )
}

export default Experience
