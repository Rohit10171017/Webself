//It takes one or more functions as a argument
//It may return a function

function output()
{
     return ()=>console.log('Return')
}

//  output(()=>console.log("Hey My Boy Benzi"));

let con = output();

con();