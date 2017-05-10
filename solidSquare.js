import { SQRT } from './constants'

export default (ctx, squareOrigin, squareSize, isMainGridDiagonal) => {
    ctx.beginPath()
    ctx.moveTo(squareOrigin[0], squareOrigin[1])

    if (isMainGridDiagonal) {
        ctx.lineTo(squareOrigin[0] + squareSize / SQRT, squareOrigin[1] - squareSize / SQRT)
        ctx.lineTo(squareOrigin[0] + squareSize * SQRT, squareOrigin[1])
        ctx.lineTo(squareOrigin[0] + squareSize / SQRT, squareOrigin[1] + squareSize / SQRT)
    } else {
        ctx.lineTo(squareOrigin[0] + squareSize, squareOrigin[1])
        ctx.lineTo(squareOrigin[0] + squareSize, squareOrigin[1] + squareSize)
        ctx.lineTo(squareOrigin[0], squareOrigin[1] + squareSize)
    }

    ctx.closePath()
    ctx.fill()
}