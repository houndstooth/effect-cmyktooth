import { SQRT } from './constants'

const principalDiagonalStripes = (ctx, topLeftX, topLeftY, squareSize, whichSolidOrStripe) => {
    if (whichSolidOrStripe == 'STRIPED_TOP_CUSP_OPAQUE') {
        ctx.beginPath()

        //top right (move to)
        ctx.moveTo( topLeftX + squareSize,     topLeftY                 )
        //top middle
        ctx.lineTo( topLeftX + squareSize / 2, topLeftY                 )
        //middle right
        ctx.lineTo( topLeftX + squareSize,     topLeftY + squareSize / 2 )
        //close and fill topRightColor
        ctx.closePath()
        ctx.fill()
        ctx.beginPath()

        //bottom right (move to)
        ctx.moveTo( topLeftX + squareSize,     topLeftY + squareSize     )
        //top left
        ctx.lineTo( topLeftX,                 topLeftY                 )
        //middle left
        ctx.lineTo( topLeftX,                 topLeftY + squareSize / 2 )
        //bottom middle
        ctx.lineTo( topLeftX + squareSize / 2, topLeftY + squareSize     )
        //close and fill topRightColor
        ctx.closePath()
        ctx.fill()
    } else if (whichSolidOrStripe == 'STRIPED_TOP_CUSP_TRANSLUCENT') {
        ctx.beginPath()

        //top middle (move to)
        ctx.moveTo( topLeftX + squareSize / 2, topLeftY                 )
        //top left
        ctx.lineTo( topLeftX,                 topLeftY                 )
        //bottom right
        ctx.lineTo( topLeftX + squareSize,     topLeftY + squareSize     )
        //middle right
        ctx.lineTo( topLeftX + squareSize,     topLeftY + squareSize / 2 )
        //close and fill other color
        ctx.closePath()
        ctx.fill()
        ctx.beginPath()

        //bottom middle (move to)
        ctx.moveTo( topLeftX + squareSize / 2, topLeftY + squareSize     )
        //middle left
        ctx.lineTo( topLeftX,                 topLeftY + squareSize / 2 )
        //bottom left
        ctx.lineTo( topLeftX,                 topLeftY + squareSize     )
        //close and fill other color
        ctx.closePath()
        ctx.fill()
    }
}

//basically like principal diagonal, just rotated counter-clockwise 45 degrees
const horizontalStripes = (ctx, topLeftX, topLeftY, squareSize, whichSolidOrStripe) => {
    if (whichSolidOrStripe == 'STRIPED_TOP_CUSP_OPAQUE') {
        ctx.beginPath()
        //top right (move to)
        ctx.moveTo(  topLeftX + ((squareSize * SQRT) / 2 ), topLeftY - ((squareSize * SQRT) / 2  )    )
        //top middle
        ctx.lineTo( topLeftX + ((squareSize * SQRT) / 4 ), topLeftY - ((squareSize * SQRT) / 4 )   )
        //middle right
        ctx.lineTo( topLeftX + ((3 * (squareSize * SQRT)) / 4), topLeftY - ((squareSize * SQRT) / 4 )  )
        //close and fill topRightColor
        ctx.closePath()
        ctx.fill()
        ctx.beginPath()

        //bottom right (move to)
        ctx.moveTo(  topLeftX + squareSize * SQRT , topLeftY   )
        //top left
        ctx.lineTo(   topLeftX, topLeftY           )
        //middle left
        ctx.lineTo(  topLeftX + ((squareSize * SQRT) / 4),  topLeftY + ((squareSize * SQRT) / 4 ))
        //bottom middle
        ctx.lineTo(  topLeftX + ((3 * (squareSize * SQRT)) / 4),  topLeftY + (((squareSize * SQRT)) / 4    ))
        //close and fill topRightColor
        ctx.closePath()
        ctx.fill()
    } else if (whichSolidOrStripe == 'STRIPED_TOP_CUSP_TRANSLUCENT') {
        ctx.beginPath()
        //top middle (move to)
        ctx.moveTo( topLeftX + ((squareSize * SQRT) / 4 ), topLeftY - ((squareSize * SQRT) / 4 )   )
        //top left
        ctx.lineTo(      topLeftX, topLeftY        )
        //bottom right
        ctx.lineTo(  topLeftX + squareSize * SQRT , topLeftY   )
        //middle right
        ctx.lineTo( topLeftX + ((3 * (squareSize * SQRT)) / 4), topLeftY - ((squareSize * SQRT) / 4 )  )
        //close and fill other color
        ctx.closePath()
        ctx.fill()
        ctx.beginPath()

        //bottom middle (move to)
        ctx.moveTo(  topLeftX + ((3 * (squareSize * SQRT)) / 4),  topLeftY + (((squareSize * SQRT)) / 4    ))
        //middle left
        ctx.lineTo(  topLeftX + ((squareSize * SQRT) / 4),  topLeftY + ((squareSize * SQRT) / 4 ))
        //bottom left
        ctx.lineTo(  topLeftX + ((squareSize * SQRT) / 2 ), topLeftY + ((squareSize * SQRT) / 2  )    )
        ctx.closePath()
        ctx.fill()
    }
}

//basically like minor diagonal, just rotated counter-clockwise 45 degrees
const verticalStripes = (ctx, topLeftX, topLeftY, squareSize, whichSolidOrStripe) => {
    if (whichSolidOrStripe == 'STRIPED_TOP_CUSP_OPAQUE') {
        ctx.beginPath()
        //top left (move to)
        ctx.moveTo(   topLeftX, topLeftY           )

        //top middle
        ctx.lineTo( topLeftX + ((squareSize * SQRT) / 4 ), topLeftY - ((squareSize * SQRT) / 4 )   )

        //middle left
        ctx.lineTo(  topLeftX + ((squareSize * SQRT) / 4),  topLeftY + ((squareSize * SQRT) / 4 ))

        //close and fill
        ctx.closePath()
        ctx.fill()
        //top right (move to)
        ctx.beginPath()
        ctx.moveTo(  topLeftX + ((squareSize * SQRT) / 2 ), topLeftY - ((squareSize * SQRT) / 2  )    )


        //bottom left
        ctx.lineTo(  topLeftX + ((squareSize * SQRT) / 2 ), topLeftY + ((squareSize * SQRT) / 2  )    )

        //bottom middle
        ctx.lineTo(  topLeftX + ((3 * (squareSize * SQRT)) / 4),  topLeftY + (((squareSize * SQRT)) / 4    ))

        //middle right
        ctx.lineTo( topLeftX + ((3 * (squareSize * SQRT)) / 4), topLeftY - ((squareSize * SQRT) / 4 )  )

        //close and fill
        ctx.closePath()
        ctx.fill()
    } else if (whichSolidOrStripe == 'STRIPED_TOP_CUSP_TRANSLUCENT') {
        ctx.beginPath()
        //top middle
        ctx.moveTo( topLeftX + ((squareSize * SQRT) / 4 ), topLeftY - ((squareSize * SQRT) / 4 )   )

        //top right
        ctx.lineTo(  topLeftX + ((squareSize * SQRT) / 2 ), topLeftY - ((squareSize * SQRT) / 2  )    )

        //bottom left
        ctx.lineTo(  topLeftX + ((squareSize * SQRT) / 2 ), topLeftY + ((squareSize * SQRT) / 2  )    )

        //middle left
        ctx.lineTo(  topLeftX + ((squareSize * SQRT) / 4),  topLeftY + ((squareSize * SQRT) / 4 ))

        //close and fill
        ctx.closePath()
        ctx.fill()

        ctx.beginPath()
        //bottom middle (move to)
        ctx.moveTo(  topLeftX + ((3 * (squareSize * SQRT)) / 4),  topLeftY + (((squareSize * SQRT)) / 4    ))

        //middle right
        ctx.lineTo( topLeftX + ((3 * (squareSize * SQRT)) / 4), topLeftY - ((squareSize * SQRT) / 4 )  )

        //bottom right
        ctx.lineTo(  topLeftX + squareSize * SQRT , topLeftY   )

        //close and fill
        ctx.closePath()
        ctx.fill()
    }
}

const minorDiagonalStripes = (ctx, topLeftX, topLeftY, squareSize, whichSolidOrStripe) => {
    if (whichSolidOrStripe == 'STRIPED_TOP_CUSP_OPAQUE') {
        ctx.beginPath()
        //top left (move to)
        ctx.moveTo( topLeftX, topLeftY)
        //top middle
        ctx.lineTo( topLeftX + squareSize / 2, topLeftY)
        //middle left
        ctx.lineTo( topLeftX, topLeftY + squareSize / 2)
        //close and fill
        ctx.closePath()
        ctx.fill()
        //top right (move to)
        ctx.beginPath()
        ctx.moveTo(topLeftX + squareSize, topLeftY)
        //bottom left
        ctx.lineTo(topLeftX, topLeftY + squareSize)
        //bottom middle
        ctx.lineTo(topLeftX + squareSize / 2, topLeftY + squareSize)
        //middle right
        ctx.lineTo(topLeftX + squareSize , topLeftY + squareSize / 2)
        //close and fill
        ctx.closePath()
        ctx.fill()
    } else if (whichSolidOrStripe == 'STRIPED_TOP_CUSP_TRANSLUCENT') {
        ctx.beginPath()
        //top middle (move to)
        ctx.moveTo(topLeftX + squareSize / 2, topLeftY)
        //top right
        ctx.lineTo(topLeftX + squareSize, topLeftY)
        //bottom left
        ctx.lineTo(topLeftX, topLeftY + squareSize)
        //middle left
        ctx.lineTo( topLeftX, topLeftY + squareSize / 2)
        //close and fill
        ctx.closePath()
        ctx.fill()

        ctx.beginPath()
        //bottom middle (move to)
        ctx.moveTo(topLeftX + squareSize / 2, topLeftY + squareSize)
        //middle right
        ctx.lineTo(topLeftX + squareSize , topLeftY + squareSize / 2)
        //bottom right
        ctx.lineTo(topLeftX + squareSize , topLeftY + squareSize)
        //close and fill
        ctx.closePath()
        ctx.fill()
    }
}

export {
    minorDiagonalStripes,
    principalDiagonalStripes,
    verticalStripes,
    horizontalStripes
}