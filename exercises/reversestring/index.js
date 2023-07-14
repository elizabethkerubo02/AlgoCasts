// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // covert string into an array using split()
    const arr = str.split('');
    // reverse the elements in an array
    const arr1 = arr.reverse();
    // join the reversed elemnts using join("")
    return arr1.join("")

}

module.exports = reverse;
