var canvas = document.querySelector('canvas')
WIDTH = HEIGHT = canvas.width = canvas.height = 1000
CENTER = [ WIDTH / 2 , HEIGHT / 2 ]

SQRT = Math.sqrt(2)

var ctx = canvas.getContext('2d')

UNIT = 1
//for now just make sure it goes off the edge of the screen
//later for speed worry about optimizing a formula for how many are actually needed
//it does maybe need to be odd so that there is always one in the center
//also, the middle one is always solid translucent, 
//which means the four corners are always either solid translucent or solid opaque
//depending on whether it's an odd-odd or an even-odd
//i.e. 3, 7, 11, 15 vs 5, 9, 13, 17 etc.
// 2, 6, 10, 14 vs 4, 8, 12, 16
// 1, 3, 5, 7 vs 2, 4, 6, 8
// ah ha, so just subtract one and divide by two
// to tell whether you should start on translucent or opaque

//AH HA, OK, SOMETHING IS WRONG BECAUSE THIS ONLY WORKS WHEN IT IS AN ODD ODD, THAT IS, 17 and 21 DONT WORK, THEY PUT A BLACK IN THE MIDDLE
//SO I GUESS MY WHOLE MODULO TRICK ONLY WORKS RELATIVE TO THE EVEN/ODD NESS OF THE ODD THAT IS THE CONCENTRIC GRID SIZE
var GRID_SIZE = 59
ITERATIONS = 9
MIN_ITERATION = 1
var iterator = [...Array(ITERATIONS).keys()].map(k => k + 1)

var solidSquare = function(topLeftX, topLeftY, squareSize, isMainGridDiagonal) {
  // console.log('solid')
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

var principalDiagonalStripes = function(topLeftX, topLeftY, squareSize, whichSolidOrStripe) {
  // console.log('principal ', whichSolidOrStripe)
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
var horizontalStripes = function(topLeftX, topLeftY, squareSize, whichSolidOrStripe) {
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
var verticalStripes = function(topLeftX, topLeftY, squareSize, whichSolidOrStripe) {
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

var minorDiagonalStripes = function(topLeftX, topLeftY, squareSize, whichSolidOrStripe) {
  // console.log('minor ', whichSolidOrStripe)
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

//this is going clockwise ... although i don't think it actually is going clockwise
ORIENTATION_OF_STRIPES_CYCLE = {
  'HORIZONTAL': 'PRINCIPAL_DIAGONAL',
  'PRINCIPAL_DIAGONAL': 'VERTICAL',
  'VERTICAL': 'MINOR_DIAGONAL',
  'MINOR_DIAGONAL': 'HORIZONTAL'
}

ORIENTATION_TO_COLOR_MAPPING = {
  'HORIZONTAL': 'rgba(0, 0, 0, 0.15)', //black
  'PRINCIPAL_DIAGONAL': 'rgba(0, 255, 255, 0.15)', //cyan
  'VERTICAL': 'rgba(255, 0, 255, 0.15)', //magenta
  'MINOR_DIAGONAL': 'rgba(255, 255, 0, 0.15)' //yellow
}

ORIENTATION_TO_STRIPES_FUNCTION = {
  'HORIZONTAL': horizontalStripes,
  'PRINCIPAL_DIAGONAL': principalDiagonalStripes,
  'VERTICAL': verticalStripes,
  'MINOR_DIAGONAL': minorDiagonalStripes
}

WHICH_SOLID_OR_STRIPE = [
  [
    [
      'SOLID_OPAQUE',
      'STRIPED_TOP_CUSP_OPAQUE'
    ],
    [
      'STRIPED_TOP_CUSP_TRANSLUCENT',
      'SOLID_TRANSLUCENT'
    ]
  ],
  [
    [
      'SOLID_TRANSLUCENT',
      'STRIPED_TOP_CUSP_TRANSLUCENT'
    ],
    [
      'STRIPED_TOP_CUSP_OPAQUE',
      'SOLID_OPAQUE'
    ]
  ]
]

function layer(orientation, howManySquaresFitInTheWindow, isMainGridDiagonal, gridSize, iter, flipGrain) {
  var topLeftType = (gridSize - 1) % 2

  var squareSize
  if (isMainGridDiagonal) {
    squareSize = (WIDTH / howManySquaresFitInTheWindow) / SQRT
  } else {
    squareSize = WIDTH / howManySquaresFitInTheWindow
  }

  //top left position is the leftmost position when diagonal
  //that is, it would be the top left position if you rotated things
  //45 degrees clockwise back into "normal" orientation
  var topLeftPosition
  if (isMainGridDiagonal) {
    topLeftPosition = [
      CENTER[0] - (((gridSize / 2) * SQRT) * squareSize),
      CENTER[1]
    ]
  } else {
    topLeftPosition = [ 
      CENTER[0] - ((gridSize / 2) * squareSize),
      CENTER[1] - ((gridSize / 2) * squareSize)
    ]
  }

  ctx.fillStyle = ORIENTATION_TO_COLOR_MAPPING[orientation]

  for (var x = 0; x < gridSize; x++) {
    for (var y = 0; y < gridSize; y++) {
      var topLeftX, topLeftY
      if (isMainGridDiagonal) {
        topLeftX = topLeftPosition[0] + (x * (squareSize / SQRT)) + (y * (squareSize / SQRT))
        topLeftY = topLeftPosition[1] - (x * (squareSize / SQRT)) + (y * (squareSize / SQRT))
      } else {
        topLeftX = topLeftPosition[0] + (x * squareSize)
        topLeftY = topLeftPosition[1] + (y * squareSize)
      }

      drawSquare(topLeftX, topLeftY, squareSize, orientation, isMainGridDiagonal, WHICH_SOLID_OR_STRIPE[topLeftType][x % 2][y % 2], iter, flipGrain)
    }
  }
}

function drawSquare(topLeftX, topLeftY, squareSize, orientation, isMainGridDiagonal, whichSolidOrStripe, iter, flipGrain) {
  if (iter < MIN_ITERATION) return
  // console.log('draw a square', topLeftX, topLeftY)

  if (whichSolidOrStripe == 'SOLID_OPAQUE') {
    solidSquare(topLeftX, topLeftY, squareSize, isMainGridDiagonal)
  } else if (whichSolidOrStripe == 'STRIPED_TOP_CUSP_OPAQUE' || whichSolidOrStripe == 'STRIPED_TOP_CUSP_TRANSLUCENT') {
    var stripesFunction = ORIENTATION_TO_STRIPES_FUNCTION[orientation]
    if (flipGrain) {
      if (whichSolidOrStripe == 'STRIPED_TOP_CUSP_TRANSLUCENT') {
        whichSolidOrStripe = 'STRIPED_TOP_CUSP_OPAQUE'
      } else if (whichSolidOrStripe == 'STRIPED_TOP_CUSP_OPAQUE') {
        whichSolidOrStripe = 'STRIPED_TOP_CUSP_TRANSLUCENT'
      }
    }
    stripesFunction(topLeftX, topLeftY, squareSize, whichSolidOrStripe)
  }
}

var isMainGridDiagonal = false
var orientation = 'MINOR_DIAGONAL'
var howManySquaresFitInTheWindow = 1
//this is ugly but this is how i'm going to achieve continuity of rotation for now
var flipGrain = false

iterator.forEach(iter => {
  layer(orientation, howManySquaresFitInTheWindow, isMainGridDiagonal, GRID_SIZE, iter, flipGrain)

  isMainGridDiagonal = !isMainGridDiagonal
  //so, we have hereby decided that each diagonal layer is paired with its BIGGER non-diagonal layer
  //so in general think of diagonal as "a bit smaller than usual"
  if (!isMainGridDiagonal) howManySquaresFitInTheWindow++
  if (iter % 4 == 0) flipGrain = !flipGrain
  orientation = ORIENTATION_OF_STRIPES_CYCLE[orientation]
})

