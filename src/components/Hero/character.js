// import PropTypes from 'prop-types'
// import useMousePosition from '../../lib/useMousePosition'
// import { useEffect } from 'react'
import styles from './index.module.scss'
import { gsap, Sine } from 'gsap'

/* eslint-disable max-len */
const Character = () => {
  const can = document.querySelector('.can > img')

  const randomX = random(10, 20)
  const randomY = random(20, 30)
  // const randomDelay = random(0, 1)
  const randomTime = random(3, 5)
  const randomTime2 = random(5, 10)
  const randomAngle = random(8, 12)

  gsap.set(can, {
    x: randomX(-1),
    y: randomX(1),
    rotation: randomAngle(-1),
  })

  moveX(can, 1)
  moveY(can, -1)
  rotate(can, 1)

  function rotate(target, direction) {
    gsap.to(target, randomTime2(), {
      rotation: randomAngle(direction),
      // delay: randomDelay(),
      ease: Sine.easeInOut,
      onComplete: rotate,
      onCompleteParams: [target, direction * -1],
    })
  }

  function moveX(target, direction) {
    gsap.to(target, randomTime(), {
      x: randomX(direction),
      ease: Sine.easeInOut,
      onComplete: moveX,
      onCompleteParams: [target, direction * -1],
    })
  }

  function moveY(target, direction) {
    gsap.to(target, randomTime(), {
      y: randomY(direction),
      ease: Sine.easeInOut,
      onComplete: moveY,
      onCompleteParams: [target, direction * -1],
    })
  }

  function random(min, max) {
    const delta = max - min
    return (direction = 1) => (min + delta * Math.random()) * direction
  }

  return (
    <section className="panel">
      <div className={styles.wrapper}>
        <div className={styles.can}>
          <img src="https://cdn.shopify.com/s/files/1/0223/3113/products/web_size_cans_00001_grande_b45a11b0-902a-412b-8754-c0deef647a5a.png?v=1562456367" />
        </div>
        <div className={styles.can}>
          <img src="https://cdn.shopify.com/s/files/1/0223/3113/products/web_size_cans_00001_grande_b45a11b0-902a-412b-8754-c0deef647a5a.png?v=1562456367" />
        </div>
        <div className={styles.can}>
          <img src="https://cdn.shopify.com/s/files/1/0223/3113/products/web_size_cans_00001_grande_b45a11b0-902a-412b-8754-c0deef647a5a.png?v=1562456367" />
        </div>
      </div>
    </section>
  )
}

// const Character = () => {
//   return (
//     <svg
//       width="720"
//       height="828"
//       viewBox="0 0 720 828"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg">
//       <path
//         d="M86.3553 195.602C59.6053 149.916 46.9342 119.692 23 48H103.954C121.553 101.418 132.816 126.721 157.454 168.19C179.276 203.333 198.283 227.934 225.033 256.048L282.757 308.06C360.191 368.507 444.664 406.462 558 431.765C534.77 459.176 524.914 476.045 509.428 514C389.757 474.64 303.875 428.953 225.737 362.181L169.421 308.06C135.632 270.808 110.289 236.368 86.3553 195.602Z"
//         fill="#F1F0EC"
//       />
//       <path
//         d="M494.882 371.602C521.532 325.916 534.155 295.692 558 224H477.349C459.816 277.418 448.595 302.721 424.049 344.19C402.308 379.333 383.372 403.934 356.722 432.048L299.215 484.06C222.07 544.507 137.912 582.462 25 607.765C48.1434 635.176 57.9619 652.045 73.3908 690C192.615 650.639 278.175 604.953 356.021 538.181L412.126 484.06C445.789 446.808 471.037 412.368 494.882 371.602Z"
//         fill="#F1F0EC"
//       />
//       <path
//         d="M149.783 714.753C170.628 717.098 190.304 718.192 220.382 717.933L251.037 717.67L319.289 717.085L511.321 715.436L577.838 714.865L605.023 714.632C632.208 714.399 654.755 712.943 675.556 710.24L676.168 781.547C654.161 778.58 634.485 777.487 603.829 777.75L449.973 779.071L384.613 779.632L223.237 781.017C192.003 781.285 171.769 782.721 150.395 786.06L149.783 714.753Z"
//         fill="#F1F0EC"
//       />
//       <path
//         d="M682.387 124.38L681.127 174.856L601.907 172.879L603.15 123.104C603.675 102.072 602.693 85.2118 599.59 69L688.624 71.2223C684.716 87.2591 682.894 104.049 682.387 124.38Z"
//         fill="#F1F0EC"
//       />
//       <rect width="720" height="828" />
//     </svg>
//   )
// }

export default Character
