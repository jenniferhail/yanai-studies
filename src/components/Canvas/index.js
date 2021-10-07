import { useEffect, useRef } from 'react'

const Canvas = (props) => {
  const canvasRef = useRef(null)
  const brushRadius = 22

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
    const context = canvasRef.current.getContext('2d')
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
    const myCanvas = canvasRef.current
    const originalHeight = myCanvas.height
    const originalWidth = myCanvas.width
    render(myCanvas, originalHeight, originalWidth)
  }, [])

  function render(myCanvas, originalHeight, originalWidth) {
    let dimensions = getObjectFitSize(
      true,
      myCanvas.clientWidth,
      myCanvas.clientHeight,
      myCanvas.width,
      myCanvas.height
    )

    const dpr = window.devicePixelRatio || 1
    myCanvas.width = dimensions.width * dpr
    myCanvas.height = dimensions.height * dpr

    let ctx = myCanvas.getContext('2d')
    let ratio = Math.min(
      myCanvas.clientWidth / originalWidth,
      myCanvas.clientHeight / originalHeight
    )

    ctx.scale(ratio * dpr, ratio * dpr) // adjust this!
    draw(ctx)
  }

  // adapted from: https://www.npmjs.com/package/intrinsic-scale
  function getObjectFitSize(
    contains /* true = contain, false = cover */,
    containerWidth,
    containerHeight,
    width,
    height
  ) {
    var doRatio = width / height
    var cRatio = containerWidth / containerHeight
    var targetWidth = 0
    var targetHeight = 0
    var test = contains ? doRatio > cRatio : doRatio < cRatio

    if (test) {
      targetWidth = containerWidth
      targetHeight = targetWidth / doRatio
    } else {
      targetHeight = containerHeight
      targetWidth = targetHeight * doRatio
    }

    return {
      width: targetWidth,
      height: targetHeight,
      x: (containerWidth - targetWidth) / 2,
      y: (containerHeight - targetHeight) / 2,
    }
  }

  return (
    <canvas
      ref={canvasRef}
      {...props}
      onMouseMove={(e) => handleMouseMove(e)}
    />
  )
}

export default Canvas
