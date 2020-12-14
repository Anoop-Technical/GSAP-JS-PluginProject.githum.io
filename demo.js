TweenMax.set('.square', { autoAlpha: 0, x: -500 })
    // TweenMax.set('#square3', { autoAlpha: 0, x: -1500 })
var t1 = new TimelineMax();
t1.to('#square1', 5, { autoAlpha: 1, backgroundColor: '#000', x: 0 }, )
    .to('#square2', 5, { autoAlpha: 1, backgroundColor: 'red', x: 0 })
    .to('#square3', 5, { autoAlpha: 1, backgroundColor: 'pink', x: 0 })
    .to('#square4', 5, { autoAlpha: 1, backgroundColor: 'yellow', x: 0 });



// TweenMax.set('.square', { autoAlpha: 0, x: -1500 })
// var t1 = new TimelineMax();
// t1.to('#square1', { autoAlpha: 1, x: 0 }, '-=3')
//     .to('#square2', { autoAlpha: 1, x: 0 }, '-=3')
//     .to('#square3', { autoAlpha: 1, x: 0 }, '-=3')
//     .to('#square4', { autoAlpha: 1, x: 0 }, '-=3');