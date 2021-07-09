// alert('hello');
document.addEventListener('DOMContentLoaded', function(){
    let pianoBlack = document.querySelector('piano__black');
    let blackKeys = document.getElementsByClassName('black__keys');
   

    
    for(let i = 0; i <= blackKeys.length-1; i++){
        blackKeys[i].addEventListener('mousedown', function(){
            blackKeys[i].className += ' active';

        })

        blackKeys[i].addEventListener('mouseup', function(){
            blackKeys[i].className = 'black__keys';

        })
    }

    let WhiteKeys = document.getElementsByClassName('white__keys');

    for(let i = 0; i <= WhiteKeys.length - 1; i++){
        WhiteKeys[i].addEventListener('mousedown', function(){
            WhiteKeys[i].className += ' active';
        })

        WhiteKeys[i].addEventListener('mouseup', function(){
            WhiteKeys[i].className += 'white__keys';
        })
    };
})

