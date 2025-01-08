//Q1. Print Odd numbers between 0 to 100.

let numbers = [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10]

for(var num of numbers){
    if(num%2 !== 0){
        console.log(num);
    }
    else{
        console.log("This is even number");
    }
}

//Q2. Arrange $numbers in ascending order.

numbers.sort();
for(var num of numbers){
    console.log(num)
}

//Q3. Calculate the sum of numbers within $numbers (reduce method)

var sumOfArray = numbers.reduce((total, num) => total+num, 0);
console.log(sumOfArray)

//Q4. Remove similar numbers from $numbers. 

let numbers2 = [3, 4, -1, -5, 3, 10, -7, 10, 1, 9, 7, -9, 0]

let uniqueNumbers = new Set();

for(num of numbers2){
    uniqueNumbers.add(num);
}

for(num of uniqueNumbers){
    console.log(num)
}


//Q5. Filter out negative numbers from $numbers2.
numbers2.sort();

for(num of numbers2){
    if(num<0){
        console.log(num);
    }
}

//Q6. Return numbers in $numbers divisible by 10.

for(num of numbers2){
    if(num%10 === 0){
        console.log(num);
    }
}

//Q7. Return the number of vowels in a string. Example: vowels (‘ How are you ’) => 5

function checkStringVowelsLength(check){
    var num=0;
    for(var ch of check){
        if(ch === 'a' | ch ==="e" | ch ==="i" | ch==="o" | ch==="y"){
            num++;
        }
    }
    return num;
}

console.log(checkStringVowelsLength("How are you?"))