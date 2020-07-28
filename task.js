let modal1 = document.getElementById('modal_main');
let modal2 = document.getElementById('modal_success');
let close = document.getElementsByClassName('modal__close');



console.log(close);
modal1.classList.add('modal_active');

for (let i = 0; i < close.length; i++ ) {
    close[i].onclick = function() {
        this.closest('div[id]').classList.remove('modal_active');
    }
}


let success = close.item(1);
success.onclick = function() {
    modal1.classList.remove('modal_active');
    modal2.classList.add('modal_active');
}
console.log(success);