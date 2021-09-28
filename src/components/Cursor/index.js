import useMousePosition from '../../lib/useMousePosition'
import styles from './index.module.scss'

const Cursor = () => {
  const { x, y } = useMousePosition()
  return (
    <>
      <div className={styles.cursor}>
        <div
          className={styles.cursor__ball}
          style={{ left: `${x}px`, top: `${y}px` }}>
          <svg height="32" width="32">
            <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
          </svg>
        </div>
      </div>
    </>
  )
}

export default Cursor
