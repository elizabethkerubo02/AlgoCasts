// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    const midpoint = Math.floor((2*n - 1)/2)
    for(row =0;row < n; row++){
        let levels = ''
        for(col =0; col < 2 *n -1; col++){
            if(midpoint -row <= col && midpoint + row >= col){
                levels += '#'
            }else{
                levels += ' '
            }

        }
        console.log(levels)


    }
}

module.exports = pyramid;
