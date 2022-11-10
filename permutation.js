             
function permutations(str) {
    return (str.length <= 1) ? [str] :
            Array.from(new Set(
              str.split('')
                 .map((char, i) => permutations(str.substr(0, i) + str.substr(i + 1)).map(p => char + p))
                 .reduce((r, x) => r.concat(x), [])
            ));
   }


   let permutate = ()=>{
    let text = document.querySelector("#text");
    text = text.value.replace(/\s/g, '');
    if(text.length>9) return alert('Please only 10 items are allowed. Your string is more than 10 characters');
    else return permutations(text);
} 

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let dsp=document.querySelector('#dsp');
let btns=document.querySelector('#btns');

let ol = document.createElement('ol');
btns.addEventListener('click', function(){
    removeAllChildNodes(dsp);
    let refs = permutate();
    dsp.innerHTML = '<p> you can arrange them in ' + refs.length + ' ways. These are </p> <p>' +
                    refs.join('     ⛔🛑     ') + ' </p>'

})