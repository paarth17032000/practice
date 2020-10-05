const icons = document.querySelectorAll('.span');
var counter = 0;
let arr = Array.from(icons);
console.log(arr);

function change(){
    // if( counter >= arr.length){ 
    //     counter = 0 
    // }
    let element = `${icons[counter]}`;
    console.log(element);
    // element.setAttribute = 'move 14s 2s infinite'; 
    counter++;
}
setInterval( change , 100);