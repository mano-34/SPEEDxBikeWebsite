const crtLoveTL = ()=>{
    const move=1000;
    const boom= 200;
    const easing ="sin.inOut";
    const easingBoom="sinIn";
    const easingOut="sin.Out";
    const opts={ duration :move , easing, opacity:1 };
    const delta =150;
    

    return new mojs.TimeLine() .add([
        new mojs.Tween({
            duration:move, OnComplete:()=>{
                [el.l, el.o,el.v,el.e].forEach((el)=>
                (el.style.opacity =0 ));
                el.blop.play();
            }
        })
    ])
}