const text = 'My Friends Are The Best !! <3';

let index = 0;

function writetext() {
    document.body.innerText = text.slice(0, index);
    index++;

    if(index > text.length) 
    index = 0;
}

setInterval(writetext,100);