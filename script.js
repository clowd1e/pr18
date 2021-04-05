function isPalindrome(str) {
    let strReversed = str.split('').reverse().join(' ')

    function joined(elem) {
        return elem.toLowerCase().split(' ').join('')
    }

    return joined(strReversed) === joined(str)
}
console.log(isPalindrome('asddsa'))
console.log(isPalindrome('abcdcba'))  
console.log(isPalindrome('abcd')) 
console.log(isPalindrome('A man a plan a canal Panama'))