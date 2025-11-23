//Using Rest Parameters we can give infinite no of parameters
//Rest Parameters SYNTAX - "..." like below
//funtion can only have one Rest Parameter and Rest Parameter must always be last
function choose(x,...y){
    console.log(x);
    console.log(y);  
}

choose(1,2,3,4,5,6,7,8,9,0); 

// In above code a accepts the first value 1 and rest values go insider y in the form of an array named y