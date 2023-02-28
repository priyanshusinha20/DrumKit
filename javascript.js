window.addEventListener("keydown", function(e){
    //console.log(e.keyCode);

    const aud=this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key=this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    //console.log(aud);
    aud.currentTime=0;

    if(!aud) return;

    aud.play();
    key.classList.add('playing');
    function removeTransition(e){
        //console.log(e);
        if(e.propertyName!='transform') return;

        this.classList.remove('playing');
    }

    const keys=this.document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));


})