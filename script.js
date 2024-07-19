function join(button){
    button.remove();
}

let cakeValue;

function search(value){
    cakeValue = value.value;
}

function go(){
    alert(`You are looking for "${cakeValue}"`);
}

let like1 = 68;
let like2 = 212;
let like3 = 32;

function like(likeTipe){
    if(likeTipe === 'likeNumber1'){
        let number = document.getElementById('likeNumber1');
        like1++;
        number.innerHTML = like1;
    }
    if(likeTipe === 'likeNumber2'){
        let number = document.getElementById('likeNumber2');
        like2++;
        number.innerHTML = like2;
    }
    if(likeTipe === 'likeNumber3'){
        let number = document.getElementById('likeNumber3');
        like3++;
        number.innerHTML = like3;
    }
}