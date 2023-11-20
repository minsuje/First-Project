
let bestMove = 0;
// bestSlides
function nextSlidesBe() {
    bestMove += 210;
    let bestContainer = document.querySelectorAll('.bestSlides li');
    
    let container = document.getElementsByClassName('bestSlides')[0];

    console.log(bestContainer.length);
    let bsetObj = document.createElement(bestContainer.lenght)
    // document.createElement('li')
    container.style.right = bestMove + 'px';
    console.log(bestMove);



    // 그림들이 뒤에 반복되게 하려고 하는데 안돼네요...  

    // for(let i=0; i < bsetObj.lenght; i++){

    //     console.log(typeof bsetObj[i]);
    //     container.append(bsetObj[i]);
    //     console.log(bsetObj.index[i]);
    
    // }

    //  뒤로 이동하고 전부 이동 시키면 다시 앞으로 돌아오게 만듬

    // console.log(bestMove);

    // 어느 1200 이동하면 다시 처음 화면으로 이동 시킴
    if(bestMove >= 840)
    {
        bestMove = -210;
    }
}

function prevSlidesBe() {
    if(bestMove > 0){
        bestMove -= 210;
        let container = document.getElementsByClassName('bestSlides')[0];
        container.style.right = bestMove + 'px';
    }
}

//recentSlides
let recentMove = 0;
function nextSlidesRe() {
    recentMove += 210;
    let container = document.getElementsByClassName('recentSlides')[0];
    container.style.right = recentMove + 'px';
    console.log(recentMove);
    console.log(container.style.right = recentMove + 'px');
    if(recentMove >= 840)
    {
        recentMove = -210;
    }
}
function prevSlidesRe() {
    if(recentMove > 0){
        recentMove -= 210;
        let container = document.getElementsByClassName('recentSlides')[0];
        container.style.right = recentMove + 'px';
    }

}

const cloneElement = () => {

}