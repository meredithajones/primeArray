function arrayFactors(number){
    const factors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    dividedBy = 2;
}

while(number>2) {
    if (number% dividedBy == 0){
        factors.push(dividedBy);
        number = number/dividedBy;
    }

else{
    dividedBy++;
        }
    }
    return factors;
}