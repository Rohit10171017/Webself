function outer(x)
{
    function inner(y)
    {
        return x * y;
    }
    return inner; 
}

const outerReturn = outer(10); 
// after this outerReturn = function inner(y){
//                            return x * y;
//                           }  

console.log(outerReturn(4));