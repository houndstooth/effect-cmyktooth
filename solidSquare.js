import { SQRT } from './constants'

export default (ctx, topLeftX, topLeftY, squareSize, isMainGridDiagonal) => {
    ctx.beginPath()
    ctx.moveTo(topLeftX, topLeftY)

    if (isMainGridDiagonal) {
        ctx.lineTo(topLeftX + squareSize / SQRT, topLeftY - squareSize / SQRT)
        ctx.lineTo(topLeftX + squareSize * SQRT, topLeftY)
        ctx.lineTo(topLeftX + squareSize / SQRT, topLeftY + squareSize / SQRT)
    } else {
        ctx.lineTo(topLeftX + squareSize, topLeftY)
        ctx.lineTo(topLeftX + squareSize, topLeftY + squareSize)
        ctx.lineTo(topLeftX, topLeftY + squareSize)
    }

    ctx.closePath()
    ctx.fill()
}