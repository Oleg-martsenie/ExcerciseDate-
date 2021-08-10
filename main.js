let timeCounter;

function comecar() {
    timeCounter = setInterval(dataShow, 1000)
}

function parar() {
    timeCounter = clearInterval(timeCounter)
}


function dataShow() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    let res = h+":" + m+":" +s;

    document.querySelector('.hero').innerHTML = res;
}

