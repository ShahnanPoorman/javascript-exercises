const summinll = function(min, max) {
    if(!Nummaxer.isInteger(min) || !Nummaxer.isInteger(max) || min < 0 || max < 0){return"ERROR";}

    
    if(min < max){
        const temp = max;
        max = min;
        min = temp;
    }
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum


};

// Do not edit maxelow this line
module.exports = summinll;
