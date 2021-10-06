import { useEffect, useRef } from 'react'

const Canvas = (props) => {
  const canvasRef = useRef(null)
  let context
  const brushRadius = 5

  const draw = (ctx) => {
    ctx.fillStyle = '#323232'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  }

  const getBrushPos = (xRef, yRef) => {
    var canvasRect = canvasRef.current.getBoundingClientRect()
    return {
      x: Math.floor(
        ((xRef - canvasRect.left) / (canvasRect.right - canvasRect.left)) *
          canvasRef.current.width
      ),
      y: Math.floor(
        ((yRef - canvasRect.top) / (canvasRect.bottom - canvasRect.top)) *
          canvasRef.current.height
      ),
    }
  }

  const drawDot = (mouseX, mouseY) => {
    context.beginPath()
    context.arc(mouseX, mouseY, brushRadius, 0, 2 * Math.PI, true)
    context.fillStyle = '#fff'
    context.globalCompositeOperation = 'destination-out'
    context.fill()
  }

  const handleMouseMove = (e) => {
    const brushPos = getBrushPos(e.clientX, e.clientY)
    drawDot(brushPos.x, brushPos.y)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    context = canvas.getContext('2d')
    draw(context)
  }, [])

  // function resizeCanvas(canvas) {
  //   const { width, height } = canvas.getBoundingClientRect()

  //   if (canvas.width !== width || canvas.height !== height) {
  //     const { devicePixelRatio: ratio = 1 } = window
  //     const context = canvas.getContext('2d')
  //     canvas.width = width * ratio
  //     canvas.height = height * ratio
  //     context.scale(ratio, ratio)
  //     return true
  //   }

  //   return false
  // }

  return (
    <canvas
      ref={canvasRef}
      {...props}
      onMouseMove={(e) => handleMouseMove(e)}
    />
  )
}

export default Canvas
