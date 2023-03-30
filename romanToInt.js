// Roman to Integer
// Given a roman numeral, convert it to an integer.
// Input is guaranteed to be within the range from 1 to 3999.
//

const romanToInt = function(string) {
    let output = 0;
    const table = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    for (let i = 0; i< string.length; i++){
        let actual = string[i]
        let proximity = string[i+1]
        //if the next roman numeral is larger, then we know we have to subtract this number
        if (proximity && table[proximity] > table[actual]){
            output -= table[actual]
        }
        else {
            output += table[actual]
        }
    }

    return output
};

console.log(romanToInt("LV"))