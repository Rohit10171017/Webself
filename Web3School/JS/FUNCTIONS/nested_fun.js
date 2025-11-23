function outer()
{
    let a = 10;
    console.log("Outer");
    function inner(){
        a = 9;
        console.log(a);
        let b = 90;
        console.log("Inner");
    }
    inner(); 
    console.log(a);
}

outer();