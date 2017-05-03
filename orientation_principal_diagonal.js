function drawStripedSquarePrincipalDiagonal(topLeftX, topLeftY, sizedUnit, topRightColor) {
  ctx.beginPath()

  //top right (move to)
  ctx.moveTo( topLeftX + sizedUnit,     topLeftY                 )
  //top middle
  ctx.lineTo( topLeftX + sizedUnit / 2, topLeftY                 )
  //middle right
  ctx.lineTo( topLeftX + sizedUnit,     topLeftY + sizedUnit / 2 )
  //close and fill topRightColor
  ctx.fillStyle = topRightColor == "white" ? "white" : "black"
  ctx.closePath()
  ctx.fill()
  ctx.beginPath()

  //top middle (move to)
  ctx.moveTo( topLeftX + sizedUnit / 2, topLeftY                 )
  //top left
  ctx.lineTo( topLeftX,                 topLeftY                 )
  //bottom right
  ctx.lineTo( topLeftX + sizedUnit,     topLeftY + sizedUnit     )
  //middle right
  ctx.lineTo( topLeftX + sizedUnit,     topLeftY + sizedUnit / 2 )
  //close and fill other color
  ctx.fillStyle = topRightColor == "white" ? "black" : "white"
  ctx.closePath()
  ctx.fill()
  ctx.beginPath()

  //bottom right (move to)
  ctx.moveTo( topLeftX + sizedUnit,     topLeftY + sizedUnit     )
  //top left
  ctx.lineTo( topLeftX,                 topLeftY                 )
  //middle left
  ctx.lineTo( topLeftX,                 topLeftY + sizedUnit / 2 )
  //bottom middle
  ctx.lineTo( topLeftX + sizedUnit / 2, topLeftY + sizedUnit     )
  //close and fill topRightColor
  ctx.fillStyle = topRightColor == "white" ? "white" : "black"
  ctx.closePath()
  ctx.fill()
  ctx.beginPath()

  //bottom middle (move to)
  ctx.moveTo( topLeftX + sizedUnit / 2, topLeftY + sizedUnit     )
  //middle left
  ctx.lineTo( topLeftX,                 topLeftY + sizedUnit / 2 )
  //bottom left
  ctx.lineTo( topLeftX,                 topLeftY + sizedUnit     )
  //close and fill other color
  ctx.fillStyle = topRightColor == "white" ? "black" : "white"
  ctx.closePath()
  ctx.fill()
  ctx.beginPath()
}