var canvas = document.querySelector('canvas')
WIDTH = HEIGHT = canvas.width = canvas.height = 1000
CENTER = [ WIDTH / 2 , HEIGHT / 2 ]

SQRT = Math.sqrt(2)

var ctx = canvas.getContext('2d')

UNIT = 1
ITERATIONS = 18
var iterator = [...Array(ITERATIONS).keys()].map(k => k + 1)

WHICH_SOLID_OR_STRIPE = [
    [
        [
            'solid-opaque',
            'striped-top-left-opaque'
        ],
        [
            'striped-top-left-translucent',
            'solid-translucent'
        ]
    ],
    [
        [
            'solid-translucent',
            'striped-top-left-translucent'
        ],
        [
            'striped-top-left-opaque',
            'solid-opaque'
        ]
    ]
]

// console.log(WHICH_SOLID_OR_STRIPE)

function layer(orientation, how_many_squares_fit_in_the_window, is_main_grid_diagonal, concentric_grid_size) {
    // this would only be needed if the transparency of the fillStyle
    // is not enough
    // var nextCanvas = document.createElement('canvas')
    // nextCanvas.setAttribute('id', how_many_squares_fit_in_the_window)
    // document.body.appendChild()

    //wow, for fun later you could just use the modulus result as the index 
    //and convert GRIDS to an array at the top level too
    var top_left_type = (concentric_grid_size - 1) % 2

    var square_size
    if (is_main_grid_diagonal) {
        square_size = (WIDTH / how_many_squares_fit_in_the_window) / SQRT
    } else {
        square_size = WIDTH / how_many_squares_fit_in_the_window
    }

    var top_left_position
    if (is_main_grid_diagonal) {
        top_left_position = [
            CENTER[0] - (((concentric_grid_size / 2) * SQRT) * square_size),
            CENTER[1]
        ]
    } else {
        top_left_position = [ 
            CENTER[0] - ((concentric_grid_size / 2) * square_size),
            CENTER[1] - ((concentric_grid_size / 2) * square_size)
        ]
    }

    ctx.fillStyle = ORIENTATION_TO_COLOR_MAPPING[orientation]

    for (var x = 0; x < concentric_grid_size; x++) {
        for (var y = 0; y < concentric_grid_size; y++) {
            var top_left_x, top_left_y
            if (is_main_grid_diagonal) {
                top_left_x = top_left_position[0] + (x * (square_size / SQRT)) + (y * (square_size / SQRT))
                top_left_y = top_left_position[1] - (x * (square_size / SQRT)) + (y * (square_size / SQRT))
            } else {
                top_left_x = top_left_position[0] + (x * square_size)
                top_left_y = top_left_position[1] + (y * square_size)
            }

            // console.log(top_left_type)
            // console.log(WHICH_SOLID_OR_STRIPE)
            drawSquare(top_left_x, top_left_y, square_size, is_main_grid_diagonal, WHICH_SOLID_OR_STRIPE[top_left_type][x % 2][y % 2])
        }
    }
}

function drawSquare(top_left_x, top_left_y, square_size, is_main_grid_diagonal, which_solid_or_stripe) {
    //for now just shooting for checkers!
    if (which_solid_or_stripe == 'solid-opaque') {
        ctx.beginPath()
        ctx.moveTo(top_left_x, top_left_y)

        if (is_main_grid_diagonal) {
            ctx.lineTo(top_left_x + square_size / SQRT, top_left_y - square_size / SQRT)
            ctx.lineTo(top_left_x + square_size * SQRT, top_left_y)
            ctx.lineTo(top_left_x + square_size / SQRT, top_left_y + square_size / SQRT)
        } else {
            ctx.lineTo(top_left_x + square_size, top_left_y)
            ctx.lineTo(top_left_x + square_size, top_left_y + square_size)
            ctx.lineTo(top_left_x, top_left_y + square_size)
        }
        
        ctx.closePath()
        ctx.fill()
    } else if (which_solid_or_stripe == 'striped-top-left-opaque') {

    } else if (which_solid_or_stripe == 'striped-top-left-translucent') {

    }
}

var is_main_grid_diagonal = false
var orientation = 'minor_diagonal'
var how_many_squares_fit_in_the_window = 1

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
// to tell whether you should start on transparent or opaque

var concentric_grid_size = 33

//this is going clockwise
ORIENTATION_OF_STRIPES_CYCLE = {
    'horizontal': 'principal_diagonal',
    'principal_diagonal': 'vertical',
    'vertical': 'minor_diagonal',
    'minor_diagonal': 'horizontal'
}

ORIENTATION_TO_COLOR_MAPPING = {
    'horizontal': 'rgba(255, 255, 255, 0.15)', //black
    'principal_diagonal': 'rgba(0, 255, 255, 0.15)', //cyan
    'vertical': 'rgba(255, 0, 255, 0.15)', //magenta
    'minor_diagonal': 'rgba(255, 255, 0, 0.15)' //yellow
}

iterator.forEach(iter => {
    layer(orientation, how_many_squares_fit_in_the_window, is_main_grid_diagonal, concentric_grid_size)

    is_main_grid_diagonal = !is_main_grid_diagonal
    //so, we have hereby decided that each diagonal layer is paired with its BIGGER non-diagonal layer
    //so in general think of diagonal as "a bit smaller than usual"
    if (!is_main_grid_diagonal) how_many_squares_fit_in_the_window++
    orientation = ORIENTATION_OF_STRIPES_CYCLE[orientation]
})