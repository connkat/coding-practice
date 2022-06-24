var romanToInt = function(string) {
    let output = 0;
    const number = {
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

        if (proximity && number[proximity] > number [actual]){
            output -= number[actual]
        }
        else {
            output += number[actual]
        }
    }

    return output
};

console.log(romanToInt("MCMXCIV"))