let a=["a0","a1"]
let b=["b0","b1"]
let splitter=","
let f=(a,b)=>{return a+'="'+b+'"'}



function pairToString(a,b,splitter,f){
    result=""
    result+=f(a[0],b[0])
    for(let i=1;i<a.length;i++){
        result+=splitter+f(a[i],b[i])
    }
    return result
}

let x=pairToString(a,b,splitter,f)
console.log(x)