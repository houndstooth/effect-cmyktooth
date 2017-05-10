const START_ITERATION = 0
const END_ITERATION = 22

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
//SO I GUESS MY WHOLE MODULO TRICK ONLY WORKS RELATIVE TO THE EVEN/ODD NESS OF THE ODD THAT IS THE GRID SIZE
const GRID_SIZE = 59

export {
	GRID_SIZE,
	START_ITERATION,
	END_ITERATION
}