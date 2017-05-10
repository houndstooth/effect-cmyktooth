import layer from './layer'
import { CANVAS_SIZE } from './customize'

const canvas = document.querySelector('canvas')

const WIDTH = CANVAS_SIZE
const HEIGHT = WIDTH
canvas.width = WIDTH
canvas.height = HEIGHT


const ctx = canvas.getContext('2d')

const UNIT = 1
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
const GRID_SIZE = 59
const ITERATIONS = 22
const iterator = [ ...Array(ITERATIONS).keys() ].map(k => k + 1)


//this is going clockwise ... although i don't think it actually is going clockwise
const ORIENTATION_OF_STRIPES_CYCLE = {
	'HORIZONTAL': 'PRINCIPAL_DIAGONAL',
	'PRINCIPAL_DIAGONAL': 'VERTICAL',
	'VERTICAL': 'MINOR_DIAGONAL',
	'MINOR_DIAGONAL': 'HORIZONTAL'
}

let isMainGridDiagonal = false
let orientation = 'MINOR_DIAGONAL'
let howManySquaresFitInTheWindow = 1
//this is ugly but this is how i'm going to achieve continuity of rotation for now
let flipGrain = false


const execute = () => {
	iterator.forEach(iter => {
		layer(ctx, orientation, howManySquaresFitInTheWindow, isMainGridDiagonal, GRID_SIZE, iter, flipGrain)

		isMainGridDiagonal = !isMainGridDiagonal
		//so, we have hereby decided that each diagonal layer is paired with its BIGGER non-diagonal layer
		//so in general think of diagonal as "a bit smaller than usual"
		if (!isMainGridDiagonal) howManySquaresFitInTheWindow++
		if (iter % 4 == 0) flipGrain = !flipGrain
		orientation = ORIENTATION_OF_STRIPES_CYCLE[ orientation ]
	})
}

export { execute }