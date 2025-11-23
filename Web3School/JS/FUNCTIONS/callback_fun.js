function foo(bar)
{
    bar();
}

foo(()=>console.log("CallBack Function"));

function named(){
    console.log('named function');
}

foo(named);