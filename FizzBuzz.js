var running = true
var num = 1
var three = false
var five = false
while(running){
    three = (num % 3 == 0)
    five = (num % 5 == 0)
        if(three || five){
                if (three && five)
                        console.log("FizzBuzz");
                else if (three)
                        console.log("Fizz");
                else if (five)
                        console.log("Buzz") ;   
                }
        else
                console.log(num)
        num++;
        if (num > 100)
                running = false;
}
