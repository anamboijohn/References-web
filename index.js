
let references = ()=>{
    let text = document.querySelector("#text");
    // let reg = /([A-Z]\.?[a-z&\-’ ]{0,15})+\(\d{4}([:-]\d{0,5})?\)|\(.{1,20}\d{4}.{0,20}\)/gm;
       let reg = /([A-Z]\.?[a-z&\-’ ]{0,15})+\( ?\d{4}([:\-]\d{0,5})? ?\)|\(.{1,20}\d{4}.{0,20}\)/g;
    return text.value.match(reg);
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
    removeAllChildNodes(ol);
    let refs = references();
    refs.forEach(ref => {
        let li = document.createElement('li');
           li.innerText = ref;
           ol.append(li);
        dsp.append(ol);
    });

})