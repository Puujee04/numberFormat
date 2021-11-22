const $input = document.querySelector('input');
let count = 3;
$input.addEventListener('keyup', function(){
    let str, myArr = [];
    str = $input.value.replace(/,/g, '');
    for(let i=str.length-1, j=1; i>=0; i--, j++){
        if(j > 3){
            myArr.unshift(',');
            j = j-3;
        }
        myArr.unshift(str[i]);
    }
    $input.value = myArr.join('');
    console.log(str);
})