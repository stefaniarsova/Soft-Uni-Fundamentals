function theAngryCat(array, entry , price){
let left = 0;
let right = 0;
let point = array[entry];

for(let i = 0; i < entry; i++){
    let num = array[i];
    if(price === 'cheap'){
        if(num < point){
            left += num;
        }
    }else if(price === 'expensive'){
        if(num >= point){
            left += num;
        }
    }
}

for(let j = entry + 1 ; j < array.length; j++){
    let num = array[j];
    if(price === 'cheap'){
        if(num < point){
            right += num;
        }
    }else if(price === 'expensive'){
        if(num >= point){
            right += num;
        }
    }
}

if(right > left){
    console.log(`Right - ${right}`)
}else {
    console.log(`Left - ${left}`)
}

}
theAngryCat([1, 5, 1],
    1,
    "cheap")
    